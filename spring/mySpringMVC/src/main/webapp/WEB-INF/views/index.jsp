<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>스프링 MVC 복습</title>
</head>
<body>
<c:choose>
    <c:when test="${empty sessionScope.member}">
        <a href="<c:url value="/login"/>">로그인</a>
<%--        contextPath 와 동일한 기능을 한다--%>
    </c:when>
    <c:otherwise>
        <a href="<c:url value="/logout"/>">로그아웃</a>
    </c:otherwise>
</c:choose>
<a href="<c:url value="/board/list"/>">게시판 이동</a>
<br/>
</body>
</html>