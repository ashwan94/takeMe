package org.example.myspringmvc.regist;

import org.springframework.stereotype.Service;

import java.lang.reflect.Member;
import java.util.List;

@Service
public class RegisterService {
    private final RegisterMapper mapper;

    public RegisterService(RegisterMapper mapper) {
        this.mapper = mapper;
    }
    public List<Member> selectAll(){
        return mapper.selectAll();
    }
}
