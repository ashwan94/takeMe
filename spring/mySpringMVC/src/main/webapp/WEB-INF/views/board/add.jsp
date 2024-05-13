
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="/WEB-INF/views/common/header.jsp">
    <jsp:param name="title" value="게시글 등록"/>
</jsp:include>

<form action="/board/add" method="post" enctype="multipart/form-data">
    <label>
        제목 :
        <input type="text" name="title"/>
    </label>
    <label>
        내용:
        <textarea rows="10" cols="40" name="content"></textarea>
    </label>
    <input type="file" name="files" multiple accept=".jpg, .jpeg, .png, .gif, .webm"/>
    <input type="hidden" name="writer" value="${sessionScope.member.id}"/>
    <div style="color:red;">${msg}</div>
    <button type="submit">등록</button>
    <button type="button">취소</button>
</form>
<jsp:include page="/WEB-INF/views/common/footer.jsp"/>