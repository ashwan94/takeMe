package org.example.myspringmvc.login;

import org.apache.ibatis.annotations.Mapper;
import org.example.myspringmvc.member.Member;

@Mapper
public interface LoginMapper {
    Member findMember(LoginRequest login);
}
