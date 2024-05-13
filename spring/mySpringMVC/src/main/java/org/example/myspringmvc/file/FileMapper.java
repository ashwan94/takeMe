package org.example.myspringmvc.file;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FileMapper {
    void saveFiles(List<FileVO> files);

    List<FileVO> selectFileList(int boardNo);

    FileVO selectFile(int id);
}
