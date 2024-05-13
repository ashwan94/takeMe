package org.example.myspringmvc.member;

import lombok.Data;
import org.example.myspringmvc.exception.WrongIdPasswordException;

import java.time.LocalDate;

@Data
public class Member {
    private String id;
    private String email;
    private String password;
    private String name;
    private LocalDate createDate;
    private LocalDate modifyDate;

    public void changePassword(String oldPassword, String newPassword){
        if(!password.equals(oldPassword)) {
            throw new WrongIdPasswordException();
        }
        this.password = newPassword;
    }
}
