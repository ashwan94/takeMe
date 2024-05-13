package org.example.myspringmvc.exception;

public class DuplicationMemberException extends RuntimeException{
    public DuplicationMemberException(String message) {
        super(message);
    }
}
