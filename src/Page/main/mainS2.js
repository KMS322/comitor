import { useNavigate } from "react-router-dom";
import "../../CSS/main.css";
import "../../CSS/main_mobile.css";

const MainS2 = () => {
  const navigate = useNavigate();

  return (
    <div className="main_s2">
      <img src="/images/main/s2_bg.png" alt="" />
      <div className="article">
        <p>Brand Story</p>
        <p id="pc">
          더우분투가 가지는 핵심가치는 함께하는 것에 있습니다.
          <br />
          반려동물과 사람이 함께하는 공간인 자연에 공헌하는 것을 궁극적인 목표로
          삼고 있습니다.
        </p>
        <p id="mobile">
          더우분투가 가지는 핵심가치는 함께하는 것에 있습니다.
          <br />
          반려동물과 사람이 함께하는 공간인 자연에 공헌하는 것을
          <br /> 궁극적인 목표로 삼고 있습니다.
        </p>
        <div
          onClick={() => {
            navigate("/about");
          }}
        >
          view more
        </div>
      </div>
    </div>
  );
};

export default MainS2;
