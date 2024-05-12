<%--
  Created by IntelliJ IDEA.
  User: na
  Date: 2024/05/12
  Time: 9:38 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>회원 가입 - 개인정보 입력</title>
</head>
<body>
    <h>회원정보 입력</h>
<form action="step3" method="post">
    <p>
        <label>
            이메일 : <br> <input type="email" name="email" id="email" value="${registerRequest.email}"/>
        </label>
    </p> <p>
        <label>
            이름 : <br> <input type="name" name="name" id="name" value="${registerRequest.name}"/>
        </label>
    </p> <p>
        <label>
            비밀번호 : <br> <input type="password" name="pw" id="pw" value="${registerRequest.pw}"/>
        </label>
    </p> <p>
        <label>
            비번 확인 : <br> <input type="password" name="cfPw" id="cfPw" value="${registerRequest.cfPw}"/>
        </label>
    </p>
    <button>작성 완료</button>
    <button>취소</button>
</form>
</body>
</html>
