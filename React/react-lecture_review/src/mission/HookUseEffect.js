import { useEffect, useState } from "react";
import "../css/useEffect.css";
const HookUseEffect = () => {
  const list = [
    { type: "admin", menu: "관리자메뉴1" },
    { type: "user", menu: "사용자메뉴1" },
    { type: "admin", menu: "관리자메뉴2" },
    { type: "user", menu: "사용자메뉴2" },
    { type: "admin", menu: "관리자메뉴3" },
  ];

  const goChangeMode = () => {
    setBtn(!btn);
  };

  const [btn, setBtn] = useState(null); // button 상태값을 감지시켜야 하므로 초깃값 null
  const [adminType, setAdminType] = useState([]);
  const [userType, setUserType] = useState([]);
  const [menuList, setMenuList] = useState([]);
  let cnt = 0;

  // list 에 담겨있는 data 들을 type 에 맞게 각각 필터링
  const getMenuList = () => {
    // type 이 admin 인것들만 모음
    const adminList = list.filter((item) => {
      return item.type == "admin";
    });
    setAdminType(adminList);

    // type 이 user 인것들만 모음
    const userList = list.filter((item) => {
      return item.type == "user";
    });
    setUserType(userList);
  };

  // 최초 실행 시 렌더링
  useEffect(() => {
    getMenuList(); // 타입에 맞게 필터링 실행
    setBtn(false); // 상태값 변경 감지를 위한 의도적인 button 상태값 변경
  }, []);

  // menuList 에 필터링한 admin, user 의 array 를 통째로 넣음
  // button 상태값을 기준으로 useEffect 실행
  useEffect(() => {
    setMenuList(btn ? adminType : userType); // menuList 에 담을 data type 지정
  }, [btn]);

  return (
    <>
      <div className="center">
        <button className="fancy" onClick={goChangeMode}>
          {btn ? "admin " : "user "} mode
        </button>
        <ul className="shadow-button-set">
          {menuList.map((v, i) => {
            return (
              <li key={i}>
                <button>{v.menu}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default HookUseEffect;
