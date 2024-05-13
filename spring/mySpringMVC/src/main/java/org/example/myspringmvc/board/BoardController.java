package org.example.myspringmvc.board;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.myspringmvc.common.PaginationInfo;
import org.example.myspringmvc.common.SearchVO;
import org.example.myspringmvc.file.FileService;
import org.example.myspringmvc.file.FileVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileUrlResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Controller
@Slf4j
@RequestMapping("/board/")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService service;
    private final FileService fileService;
    private final Path filePath = Paths.get("/Users", "/na/workspace/spring/attach");

    @GetMapping("list")
    public String boardList(SearchVO vo, @RequestParam(value = "currentPageNo", defaultValue = "1") int currentPageNo, Model model){
        PaginationInfo paginationInfo = new PaginationInfo();
        paginationInfo.setCurrentPageNo(currentPageNo);
        paginationInfo.setRecordCountPerPage(3);
        paginationInfo.setPageSize(5);

        int totalCount = service.getBoardListCount(vo);
        paginationInfo.setTotalRecordCount(totalCount);
        vo.setFirstRecordIndex(paginationInfo.getFirstRecordIndex());
        vo.setLastRecordIndex(paginationInfo.getLastRecordIndex());

        List<BoardVO> list = service.getBoardList(vo);
        model.addAttribute("boards", list);
        model.addAttribute("pagination", paginationInfo);
        return "board/list";
    }

    @GetMapping("view")
    public String boardView(@RequestParam(value = "no") int searchNo, Model model){
        BoardVO vo = service.getBoard(searchNo);
        List<FileVO> files = fileService.selectFileList(searchNo);
        model.addAttribute("board", vo);
        model.addAttribute("files", files);
        return "board/view";
    }

    @GetMapping("add")
    public String boardAddView() {return "board/add";}

    @PostMapping("add")
    public String boardAdd(BoardVO vo, Model model, List<MultipartFile> files){
        int insertBoard = service.insertBoard(vo);
        List<FileVO> fileList = new ArrayList<>();
        for(MultipartFile file : files){
            if(file.isEmpty()){
                continue;
            }

            FileVO f = new FileVO();
            f.setFilePath(filePath.toString());
            f.setOriginalName(file.getOriginalFilename());
            f.setFileSize(file.getSize());
            String fileName = UUID.randomUUID().toString();
            f.setFileName(fileName);

            fileName = fileName + "_" + file.getOriginalFilename();
            fileList.add(f);

            if(Files.notExists(filePath)){
                try {
                    Files.createDirectory(filePath);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }

            try {
                file.transferTo(Paths.get(filePath.toString(), fileName));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        fileService.saveFiles(insertBoard, fileList);
        if(insertBoard > 0) {
            // 등록 성공
            return "redirect:/board/list";
        }else{
            model.addAttribute("msg", "수정 실패");
            return "board/add";
        }
    }

    @GetMapping("update")
    public String boardUpdateView(@RequestParam("no") int searchNo, Model model){
        BoardVO vo = service.getBoard(searchNo);
        model.addAttribute("board", vo);
        return "board/update";
    }

    @PostMapping("update")
    public String boardUpdate(BoardVO vo, Model model){
        int updated = service.updateBoard(vo);
        if(updated > 0) {
            // 등록 성공
            return "redirect:/board/list";
        }else{
            // 등록 실패
            model.addAttribute("msg", "수정 실패");
            return "/board/update";
        }
    }

    @GetMapping("delete")
    public String boardDelete(@RequestParam(value = "no") int deleteNo, Model model){
        int deleted = service.deleteBoard(deleteNo);
        if(deleted > 0) {
            return "redirect:/board/list";
        }else{
            model.addAttribute("msg", "삭제 실패");
            return "board/update";
        }
    }

    @GetMapping("download/{fileId}")
    public ResponseEntity<Resource> download(@PathVariable("fileId") int fileId){
        FileVO file = fileService.selectFile(fileId);

        FileUrlResource resource;
        Path path = Paths.get(filePath.toString(), file.getFileName() + "_" + file.getOriginalName());

        try {
            resource = new FileUrlResource(path.toString());
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }

        String fileName = URLEncoder.encode(file.getOriginalName(), StandardCharsets.UTF_8);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; fileName=\"" + fileName + "\"")
                .header(HttpHeaders.CONTENT_LENGTH, String.valueOf(file.getFileSize()))
                .body(resource);
    }

}
