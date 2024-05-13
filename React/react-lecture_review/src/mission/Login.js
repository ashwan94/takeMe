import { useState } from "react";

const Login = (props) => {
  const { onClose } = props;
  console.log(onClose);

  const [toggleBtn, setToggleBtn] = useState(false);
  const [logoName, setLogoName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const goLoginPage = () => {
    setToggleBtn(true); // 화면 전환을 위한 button
    setLogoName("구글"); // 플랫폼 이름에 따라 출력할 이름
  };

  // handler
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const pwOnChangeHandler = (e) => {
    setPw(e.target.value);
  };

  // 사용자가 입력한 계정 정보와 Server 에 저장된 data 를 대조하기 위한 function
  const checkAccount = () => {
    const localData = JSON.parse(localStorage.getItem("login"));
    if (localData.id == email && localData.pw == pw) {
      onClose({ close: true, name: localData.name });
    } else {
      alert("잘못된 접근입니다.");
    }
  };

  const cancleLogin = () => {
    onClose({close:false});
  }

  // 로그인 플랫폼 선택 창
  const selectView = () => {
    return (
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                    loading="lazy"
                    className="w-10"
                    alt="tailus logo"
                  />
                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                    Sign in to unlock the <br /> best of Tailus.
                  </h2>
                </div>
                <div className="mt-16 grid space-y-4">
                  <button
                    onClick={goLoginPage}
                    className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div className="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        className="absolute left-0 w-5"
                        alt="google logo"
                      />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // email, pw 입력 창
  const loginView = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  {logoName ? logoName + " 로그인" : null}
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      //   autocomplete="off"
                      onChange={emailOnChangeHandler}
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      //   autocomplete="off"
                      onChange={pwOnChangeHandler}
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      onClick={checkAccount}
                      className="bg-blue-500 text-white rounded-md px-2 mx-5 py-1"
                    >
                      로그인
                    </button>
                    <button
                      onClick={cancleLogin}
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                        취소
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{toggleBtn ? loginView() : selectView()}</>;
};
export default Login;
