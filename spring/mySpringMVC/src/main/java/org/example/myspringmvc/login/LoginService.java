package org.example.myspringmvc.login;

import lombok.RequiredArgsConstructor;
import org.example.myspringmvc.member.Member;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final LoginMapper mapper;

    public Member findMember(LoginRequest login){
        return mapper.findMember(login);
    }
}
