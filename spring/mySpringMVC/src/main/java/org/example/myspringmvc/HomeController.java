package org.example.myspringmvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping({"/", "/index"})
    public String index(String name, Model model){
        model.addAttribute("greeting", "안녕하세요" + name + "님");
        return "index";

        // servlet-config.xml 에서 정의한 InternalResourceViewResolver 에 의해
        // return 인 index 의 접두사, 접미사에 /WEB-INF/views 와 .jsp 가 자동으로 붙는다
    }
}
