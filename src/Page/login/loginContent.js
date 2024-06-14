import { useNavigate } from "react-router-dom";
import "../../CSS/login.css";
import "../../CSS/login_mobile.css";

const LoginContent = () => {
  const navigate = useNavigate();

  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="login_s1">
      <div className="section_container">
        <div className="article_container">
          <div className="title_box">
            <img src="/images/login/back_btn.png" alt="" />
            <p>로그인</p>
          </div>
          <div className="input_box">
            <input placeholder="아이디" />
            <input placeholder="비밀번호" />
            <div className="submit_btn">로그인</div>
          </div>
          <div className="sub_box">
            <div className="auto_login_box">
              <img src="/images/login/check_btn.png" alt="" />
              <p>자동로그인</p>
            </div>
            <div className="find_box">
              <p>아이디 찾기</p>
              <p>비밀번호 찾기</p>
            </div>
          </div>
          <div
            className="signin_btn"
            onClick={() => {
              goPage("/signin");
            }}
          >
            회원가입
          </div>
          <div className="kakao_btn">
            <img src="/images/login/kakao.png" alt="" />
            <p>카카오 로그인</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
