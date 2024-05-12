package org.example.myspringmvc.regist;

import lombok.Data;

@Data
public class RegisterRequest {
    private String email;
    private String name;
    private String pw;
    private String cfPw;

}
