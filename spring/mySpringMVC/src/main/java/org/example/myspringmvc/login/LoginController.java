package org.example.myspringmvc.login;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.myspringmvc.member.Member;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    private final LoginService service;

    @GetMapping("login")
    public String loginView() {
        return "common/login";
    }

    @PostMapping("login")
    public String login(LoginRequest login, HttpSession session, Model model){
        Member member = service.findMember(login);
        log.debug("조회된 DB 에 존재하는 계정 : {}",member);
        if(member != null) {
            session.setAttribute("member", member);
            return "redirect:/";
        }

        model.addAttribute("msg", "로그인 실패!");
        return "common/login";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate(); // session 의 모든 data 삭제
        return "redirect:/";
    }

    @PostMapping("/ajaxLogin")
    @ResponseBody
    public Map<String, String> ajaxLogin(LoginRequest login, HttpSession session){
        HashMap<String, String> map = new HashMap<>();
        Member member = service.findMember(login);
        String location = (String)session.getAttribute("redirectURL");

        if(member != null) {
            if(location != null) {
                map.put("msg", location);
            }else{
                map.put("msg", "/");
            }
            session.setAttribute("member", member);
        }else{
            map.put("msg", "failure");
            session.setAttribute("msg", "실패");
        }
        return map;
    }
}
