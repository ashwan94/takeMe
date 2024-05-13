import { useState } from "react";
import Login from "./Login";

const PropsSend = () => {
  const [loginBtn, setLoginBtn] = useState(false);
  
  const [logName, setLogName] = useState("");
  const doLogin = () => {
    setLoginBtn(true);
    setLogName(""); // 로그인 성공 시 화면에 계속 뜨는 'name 님 환영합니다' 를 방지
  };
  
  // 자식 컴포넌트로부터 data 를 전달받을 함수
  const close = (param) => { 
    const { close, name } = param;
    if (close) {
      alert("로그인 완료!");
      setLoginBtn(false);
      if (name) {
        setLogName(name); // 로그인 성공했을 경우 닉네임 띄우기 위한 state
      }
    }else{
        setLoginBtn(false);
    }
  };

  return (
    <>
      <button onClick={doLogin}>로그인</button>
      {loginBtn ? <Login onClose={close} /> : null}
      <div>{logName ? logName + "님 환영합니다!" : null}</div>
    </>
  );
};
export default PropsSend;
