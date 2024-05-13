import { useCallback, useEffect, useRef, useState } from "react";

const SignupTimer = ({ onClose, limitTime }) => {
 
  // 시간 제한
  const [second, setSecond] = useState(limitTime);
  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setSecond((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log("타이머 정리");
      clearInterval(intervalTimer);
    };
  }, []);

  // 인증 시간 만료되면 창 닫기
  useEffect(() => {
    if (second == 0) {
      onClose({ close: false });
    }
  }, [second]);

  // 인증 시간 날짜 포매팅
  const timeFormat = (second) => {
    const min = Math.floor(second / 60);
    const sec = second % 60;
    return `${min} : ${sec}`;
  };

  return (
    <>
      <input
        value={timeFormat(second)}
        disabled
        readOnly
        name="timer"
        id="timer"
        className="h-10 border mt-1 rounded px-4 w-75 bg-gray-50"
      />
    </>
  );
};
export default SignupTimer;
