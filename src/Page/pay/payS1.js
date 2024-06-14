import { useNavigate } from "react-router-dom";
import "../../CSS/pay.css";
import "../../CSS/pay_mobile.css";
const PayS1 = () => {
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="pay_s1">
      <div className="article_container">
        <div
          className="article"
          onClick={() => {
            goPage("/cart");
          }}
        >
          <img src="/images/cart/cart_img1_empty.png" alt="" />
          <p>장바구니</p>
        </div>
        <div className="article">
          <img src="/images/cart/cart_img2_full.png" alt="" />
          <p>주문하기</p>
        </div>
        <div className="article">
          <img
            src="/images/cart/cart_img3_empty.png"
            alt=""
            onClick={() => {
              goPage("/complete");
            }}
          />
          <p>주문완료</p>
        </div>
      </div>
    </div>
  );
};

export default PayS1;
