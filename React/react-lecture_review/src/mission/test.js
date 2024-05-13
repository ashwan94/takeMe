import { useEffect, useState } from "react";
import "../css/useEffect.css";

const Test = () => {
  const list = [
    { type: "admin", menu: "관리자메뉴1" },
    { type: "user", menu: "사용자메뉴1" },
    { type: "admin", menu: "관리자메뉴2" },
    { type: "user", menu: "사용자메뉴2" },
    { type: "admin", menu: "관리자메뉴3" },
  ];
  const [btn, setBtn] = useState(false);
  const [adminType, setAdminType] = useState([]);
  const [userType, setUserType] = useState([]);

  const goChangeBtn = () => {
    setBtn(!btn);
  };

  const getMenuList = () => {
    const adminMenu = [];
    const userMenu = [];

    list.forEach((li) => {
      li.type == "admin" ? adminMenu.push(li.menu) : userMenu.push(li.menu);
    });

    setAdminType(adminMenu);
    setUserType(userMenu);
  };

  // 최초 실행 시 user type 에 따라 menu 정보 필터링
  useEffect(() => {
    getMenuList();
  }, []);

  const adminSite = () => {
    return (
      <div>
        <div className="center">
          <button className="fancy" onClick={goChangeBtn}>
            {btn ? "user " : "admin "} mode
          </button>
        </div>
        <ul className="shadow-button-set">
          {adminType.map((v, i) => {
            return (
              <li key={i}>
                <button>{v}</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  const userSite = () => {
    return (
      <div>
        <div className="center">
          <button className="fancy" onClick={goChangeBtn}>
            {btn ? "user " : "admin "} mode
          </button>
        </div>
        <ul className="shadow-button-set">
          {userType.map((v, i) => {
            return (
              <li key={i}>
                <button>{v}</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return <>{btn ? userSite() : adminSite()}</>;
};

export default Test;
