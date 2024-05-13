import { useState } from "react";
import { useCallback } from "react";
import SignupTimer from "./SingupTimer";

const Signup = () => {
  // 인증 시간
  const limitTime = 10;

  // State : ID, PW, Email
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [userAuthKey, setUserAuthKey] = useState("");

  // handler
  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);
  const emailOnChangeHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const authKeyOnChangeHandler = useCallback((e) => {
    setUserAuthKey(e.target.value);
  });

  // localStorage 에 random auth key 생성
  const [localAuthKey, setLocalAuthKey] = useState("");
  const makeRandomAuthKey = () => {
    let authKey = "";
    for (let i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * 10);
      authKey += random;
    }
    localStorage.setItem("authKey", JSON.stringify(authKey));
    setLocalAuthKey(JSON.parse(localStorage.getItem("authKey")));
  };

  // Timer comp mount
  const [limitTimeBtn, setlimitTimeBtn] = useState("");
  const onClose = (param) => {
    const { close } = param;
    setlimitTimeBtn(close);
    makeRandomAuthKey();
  };

  // 사용자 입력 정보 확인
  const checkInfo = () => {
    if (localAuthKey == userAuthKey) {
      alert("인증 성공!");
      setlimitTimeBtn(false);
    }
  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              회원가입을 부탁드립니다
            </h2>
            <p className="text-gray-500 mb-6">
              제한 시간 안에 모든 요청을 처리하세요
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">아이디</label>
                      <input
                        onChange={idOnChangeHandler}
                        placeholder="ID"
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">비밀번호</label>
                      <input
                        onChange={pwOnChangeHandler}
                        type="password"
                        name="pw"
                        id="pw"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="password"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">이메일</label>
                      <input
                        onChange={emailOnChangeHandler}
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-75 bg-gray-50"
                        placeholder="abc@gmail.com"
                      />
                      <button
                        onClick={() => onClose({ close: true })}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 ms-3 rounded"
                      >
                        이메일 인증
                      </button>
                    </div>
                    {limitTimeBtn ? (
                      <div className="md:col-span-5">
                        <label htmlFor="auth">인증번호 </label>
                        <input
                          onChange={authKeyOnChangeHandler}
                          type="인증번호 입력"
                          name="auth"
                          id="auth"
                          className="h-10 border mt-5 rounded me-5 px-4 w-75 bg-gray-50"
                        />
                        <input
                          defaultValue={localAuthKey}
                          className="h-10 border mt-5 rounded me-5 px-4 w-75 bg-gray-50"
                        />
                        <SignupTimer onClose={onClose} limitTime={limitTime} />
                      </div>
                    ) : null}
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          onClick={checkInfo}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                        >
                          완료
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
