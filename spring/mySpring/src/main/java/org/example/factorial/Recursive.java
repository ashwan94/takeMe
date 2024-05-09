package org.example.factorial;

import org.springframework.stereotype.Component;

@Component
public class Recursive implements Calculator{

    @Override
    public long factorial(long n) {
        if(n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
}
