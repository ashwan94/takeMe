package org.example.myspringmvc.board;

import org.example.myspringmvc.common.SearchVO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    private final BoardMapper mapper;
    public BoardService(BoardMapper mapper) {
        this.mapper = mapper;
    }

    public int getBoardListCount(SearchVO vo) {
        return mapper.getBoardListCount(vo);
    }
    public List<BoardVO> getBoardList(SearchVO vo) {return mapper.getBoardList(vo);}
    public BoardVO getBoard(int searchNo) {return mapper.getBoard(searchNo);}
    public int insertBoard(BoardVO vo) {
        mapper.insertBoard(vo);
        return vo.getNo();
    }
    public int updateBoard(BoardVO vo) {return mapper.updateBoard(vo);}
    public int deleteBoard(int deleteNo) {return mapper.deleteBoard(deleteNo);}
}
