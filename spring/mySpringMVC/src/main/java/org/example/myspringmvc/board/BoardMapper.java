package org.example.myspringmvc.board;

import org.apache.ibatis.annotations.Mapper;
import org.example.myspringmvc.common.SearchVO;

import java.util.List;

@Mapper
public interface BoardMapper {
    int getBoardListCount(SearchVO vo);
    List<BoardVO> getBoardList(SearchVO vo);
    BoardVO getBoard(int searchNo);
    int insertBoard(BoardVO vo);
    int updateBoard(BoardVO vo);
    int deleteBoard(int deleteNo);
}