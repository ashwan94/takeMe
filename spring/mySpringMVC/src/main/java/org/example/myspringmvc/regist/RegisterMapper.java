package org.example.myspringmvc.regist;

import org.apache.ibatis.annotations.Mapper;

import java.lang.reflect.Member;
import java.util.List;

@Mapper
public interface RegisterMapper {
    List<Member> selectAll();
    Member selectByEmail(String email);
}
