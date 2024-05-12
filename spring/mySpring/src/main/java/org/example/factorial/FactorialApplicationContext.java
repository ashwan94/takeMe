package org.example.factorial;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@ComponentScan(basePackages = "org.example.factorial")
@EnableAspectJAutoProxy
public class FactorialApplicationContext {
}
