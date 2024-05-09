package org.example.factorial;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class FactorialExample {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(FactorialApplicationContext.class);

        Calculator forLoop = context.getBean("forLoop", Calculator.class);
        long result = forLoop.factorial(10);
        System.out.println("for loop : " + result);

        Calculator recursive = context.getBean("recursive", Calculator.class);
        result = recursive.factorial(10);
        System.out.println("recursive : " + result);
    }
}
