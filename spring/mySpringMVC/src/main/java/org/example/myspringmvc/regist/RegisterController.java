package org.example.myspringmvc.regist;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.imageio.spi.RegisterableService;
import java.lang.reflect.Member;
import java.util.List;

@Controller
@RequestMapping("/register/")
@RequiredArgsConstructor
public class RegisterController {
    private final RegisterService service;

    @GetMapping("step1")
    public String step1() {
        return "register/step1";
    }

    @PostMapping("step2")
    public String step2(boolean agree) {
        if(agree){
            return "register/step2";
        }
        return "redirect:/register/step1";
    }

    @PostMapping("step3")
    public String step3(RegisterRequest register){
        System.out.println("이름 : " + register.getName());
        System.out.println("이메일 : " + register.getEmail());
        System.out.println("비번 : " + register.getPw());
        System.out.println("비번 확인 : " + register.getCfPw());

        return "register/step3";
    }

    @GetMapping("list")
    public String selectAll(Model model){
        List<Member> members = service.selectAll();
        model.addAttribute("members", members);
        return "register/list";
    }

}
