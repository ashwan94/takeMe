import { useCallback, useEffect, useRef, useState } from "react";
import "../css/HookUseCallback.css";
const HookUseCallback = () => {
  // Validation
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [cfPw, setCfPw] = useState("");
  const [tel, setTel] = useState("");
  const [birth, setBirth] = useState("");

  // 최종 회원가입 가능 여부 check 를 위한 Hook
  const [btn, setBtn] = useState(false);

  // handler
  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  });

  const nameOnChangeHandler = useCallback((e) => {
    setName(e.target.value);
  });

  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  });

  const pwCfOnChangeHandler = useCallback((e) => {
    setCfPw(e.target.value);
  });

  const telOnChangeHandler = useCallback((e) => {
    setTel(e.target.value);
  });

  const birthOnChangeHandler = useCallback((e) => {
    setBirth(e.target.value);
  });

  // fucntion
  // PW 와 PW confirm 이 일치하는지 확인하는 function
  const pwRef = useRef(null);
  const cfPwRef = useRef(null);
  const goCheckPw = () => {
    if (pw == "") {
      alert("비번을 입력해주세요");
      pwRef.current.focus();
      return;
    }
    if (cfPw == "") {
      alert("비번 확인 칸을 입력해주세요");
      cfPwRef.current.focus();
      return;
    }

    if (pw != cfPw) {
      alert("비번이 일치하지 않습니다.");
      cfPwRef.current.focus();
    } else {
      alert("비번이 일치합니다.");
      setBtn(!btn);
    }
  };

  const [userInfo, setUserInfo] = useState({});
  const submitInfo = () => {
    if (btn) {
      alert("회원가입이 완료됐습니다!");
      setUserInfo({
        id: id,
        name: name,
        pw: pw,
        cfPw: cfPw,
        tel: tel,
        birth: birth,
      });
    } else {
      alert("비번 확인 버튼을 클릭해주세요");
      cfPwRef.current.focus();
    }
  };

  useEffect(() => {
    if (userInfo.id != undefined) {
      alert(
        `회원정보 : ${userInfo.id} ${userInfo.name} ${userInfo.tel} ${userInfo.birth}`
      );
    }
  }, [userInfo]);

  return (
    <>
      <section>
        <div className="href-target" id="input-types"></div>
        <h1>Input types</h1>

        <div className="nice-form-group">
          <label>아이디</label>
          <input
            type="text"
            placeholder="Your id"
            onChange={idOnChangeHandler}
          />
        </div>
        <div className="nice-form-group">
          <label>이름</label>
          <input
            type="text"
            placeholder="Your name"
            onChange={nameOnChangeHandler}
          />
        </div>

        <div className="nice-form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            onChange={pwOnChangeHandler}
            ref={pwRef}
          />
        </div>

        <div className="nice-form-group">
          <label>Password Confirm</label>
          <input
            type="password"
            placeholder="confirm password"
            style={{ width: "60%" }}
            onChange={pwCfOnChangeHandler}
            ref={cfPwRef}
          />
          <div className="to-reset confirm-btn" onClick={goCheckPw}>
            비번 확인
          </div>
        </div>

        <div className="nice-form-group">
          <label>Phonenumber</label>
          <input
            type="tel"
            placeholder="Your phonenumber"
            onChange={telOnChangeHandler}
            maxLength={11}
          />
        </div>
        <div className="nice-form-group">
          <label>생년월일</label>
          <input
            type="text"
            placeholder="Your birth"
            onChange={birthOnChangeHandler}
            maxLength={8}
          />
        </div>

        <details>
          <summary>
            <div className="toggle-code" onClick={submitInfo}>
              회원가입 요청
            </div>
          </summary>
        </details>
      </section>
    </>
  );
};

export default HookUseCallback;
