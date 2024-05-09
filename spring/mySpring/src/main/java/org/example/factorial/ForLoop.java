package org.example.factorial;

import org.springframework.stereotype.Component;

@Component
public class ForLoop implements Calculator{

    @Override
    public long factorial(long n) {
        long result = 1;

        for(long i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
