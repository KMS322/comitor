import "../../CSS/mypage.css";
import "../../CSS/mypage_mobile.css";
const MypageS1 = () => {
  return (
    <div className="mypage_s1">
      <img src="/images/mypage/mypage_s1_img1.png" alt="" />
      <div className="text_box">
        <p>회원정보 변경</p>
        <p>Comitor</p>
        <p>가입일 : 2023.10.19</p>
      </div>
      {/* <div className="review_box">
        <img src="/images/mypage/mypage_s1_img2.png" alt="" />
        <p>후기작성</p>
        <p>14</p>
      </div> */}
    </div>
  );
};

export default MypageS1;
