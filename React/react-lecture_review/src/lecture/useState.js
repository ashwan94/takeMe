import { useState } from "react";

const HookUseState = () => {
  const [score, setScore] = useState(0);

  const addLetScore = () => {
    setScore(score + 1);
  };
  const addMinusScore = () => {
    setScore(score - 1 < 0 ? 0 : score - 1);
  };

  return (
    <>
      <div>현재 점수 : {score}</div>
      <button onClick={addLetScore}>점수 +</button>
      <button onClick={addMinusScore}>점수 -</button>
    </>
  );
};
export default HookUseState;
