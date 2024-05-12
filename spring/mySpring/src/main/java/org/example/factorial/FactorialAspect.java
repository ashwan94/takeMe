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
        // 1. 위 execution 에서 지정된 interface 의 method 로 구현된 모든 것들을 찾는다
        // 2. 발견된 것을 차례로 ProceedingJoinPoint 객체로 받아서 proceed() 라는 method 로 실행시킨다(작동 순서는 불명)
        // 3. 감지된 method 개수만큼 알아서 작동 횟수가 정해진다(신기하다)
        long start = System.nanoTime();

        Object result = joinPoint.proceed();

        long end = System.nanoTime();
        System.out.println("걸린 시간 : "+ joinPoint.getTarget() +  ", " + (end - start));

        return result;
    }

}
