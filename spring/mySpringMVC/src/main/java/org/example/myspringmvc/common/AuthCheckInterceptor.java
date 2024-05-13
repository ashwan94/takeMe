package org.example.myspringmvc.common;

import lombok.extern.slf4j.Slf4j;
import org.example.myspringmvc.member.Member;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Slf4j
@Component
public class AuthCheckInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        Member member = (Member) session.getAttribute("member");

        String requestURI = request.getRequestURI();
        String queryString = request.getQueryString();
        String redirectURL = requestURI + (queryString != null ? "?" + queryString : "");

        if(member == null){
            session.setAttribute("redirectURL", redirectURL);
            response.sendRedirect("/login");
            return false;
        }
        session.removeAttribute("redirectURL");
        return true;
    }
}
