<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<footer>
    (c) copyright 2024 NEXTIT all right reserved.
</footer>
<script>
    function deleteItem(url){
        if(confirm("삭제하시겠습니까?")){
            location.href=url;
        }else{
            alert("취소하셨습니다.");
        }
    }
</script>
</body>
</html>
