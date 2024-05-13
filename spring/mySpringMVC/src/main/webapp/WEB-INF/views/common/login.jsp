
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>로그인</title>
</head>
<style>
    label{
        display : block;
    }
    #log{
        color:red;
    }
</style>
<body>
<h1>로그인</h1>
<form action="/login" method="post" id="loginForm" enctype="application/x-www-form-urlencoded">
    <label>
        아이디 :
        <input type="text" name="id" value="${cookie.savedId.value}" placeholer="ID 를 입력하세요">
    </label>
    <label>
        패스워드 :
        <input type="password" name="password" placeholer="패스워드를 입력하세요">
    </label>
    <label>
        <input type="checkbox" name="saveId" value="true"> 아이디 저장
    </label>
    <div id="log">${msg}</div>
    <button type="button" id="loginBtn">로그인</button>
    <button type="button">취소</button>
</form>
<script>
    document.querySelector("#loginBtn").addEventListener("click", evt => {
        let formData = new FormData(loginForm);
        fetch("/ajaxLogin", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.msg == "failure") {
                    document.querySelector("#log").textContent = "로그인 실패";
                } else {
                    location.href = data.msg;
                }
            })
    })
</script>
</body>
</html>
