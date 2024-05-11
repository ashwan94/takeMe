import { useState } from "react";

const UseState = () => {
    const [score, setScore] = useState(0);

    const addLetScore = () => {
        setScore(score+1);
    }
    const minusLetScore = () => {
        setScore(score-1 < 0 ? 0 : score - 1);
    }
  return (
    <>
      <h1>현재 점수 : {score}</h1>
      <button onClick={addLetScore}>점수 +</button>
      <button onClick={minusLetScore}>점수 -</button>
    </>
  );
};
export default UseState;
