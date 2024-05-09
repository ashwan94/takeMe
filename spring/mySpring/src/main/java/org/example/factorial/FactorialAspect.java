package org.example.factorial;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class FactorialAspect {

    @Around("execution(long org.example.factorial.Calculator.factorial(..))")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.nanoTime();

        Object result = joinPoint.proceed();

        long end = System.nanoTime();
        System.out.println("걸린 시간 : " + (end - start));

        return result;
    }

}
