import { useRef, useState } from "react";

const HookUseRef = () => {
  const imgRef = useRef(null);
  const changeFood = () => {
    imgRef.current.src = `/images/food${Math.floor(Math.random() * 8 + 1)}.png`;
  };

  const colorRef = useRef(null);
  const [colorHistory, setColorHistory] = useState([]);
  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorRef.current.style.backgroundColor = randomColor;
    setColorHistory([...colorHistory, randomColor]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100px", height: "100px", border: "1px solid" }}>
          <img ref={imgRef} style={{ width: "100px", height: "100px" }} />
        </div>
        <button onClick={changeFood}>음식 변경</button>
      </div>

      <div
        ref={colorRef}
        style={{ width: "100px", height: "100px", border: "1px solid" }}
      >
        <button onClick={changeColor}>컬러 변경</button>
        <p>색상 변경 기록</p>
        <ul>
          {colorHistory.map((v, i) => {
            return (
              <li key={i} style={{ color: v }}>
                {v}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HookUseRef;
