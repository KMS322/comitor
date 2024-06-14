import { useLocation, useNavigate } from "react-router-dom";
import "../../CSS/pay.css";
import "../../CSS/pay_mobile.css";
const PayS3 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartProducts, id } = location.state || {};
  const cartProduct = cartProducts?.find((product) => product.id === id);
  let totalAmount = 0;
  console.log(cartProducts, id);
  if (id === 0) {
    totalAmount = cartProducts.reduce((acc, product) => {
      return acc + product.price * product.cnt;
    }, 0);
  }
  return (
    <div className="pay_s3">
      <div className="section_container">
        <p>상품 정보</p>
        <div id="pc" className="article_container">
          <div className="row_head">
            <p>상품 정보</p>
            <p>수량</p>
            <p>상품 할인</p>
            <p>배송비</p>
            <p>주문금액</p>
          </div>
          {typeof id !== "undefined" ? (
            id === 0 ? (
              cartProducts.map((cartProduct, index) => {
                return (
                  <div className="row_content" key={index}>
                    <div className="item_box">
                      <img src={cartProduct.imageUrl} alt="" />
                      <p
                        dangerouslySetInnerHTML={{ __html: cartProduct.name }}
                      ></p>
                    </div>
                    <p>{cartProduct.cnt}</p>
                    <p>없음</p>
                    <p>무료</p>
                    <p>
                      {" "}
                      {(cartProduct.price * cartProduct.cnt).toLocaleString()}원
                    </p>
                  </div>
                );
              })
            ) : (
              <div className="row_content">
                <div className="item_box">
                  <img src={cartProduct.imageUrl} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: cartProduct.name }}></p>
                </div>
                <p>{cartProduct.cnt}</p>
                <p>없음</p>
                <p>무료</p>
                <p>
                  {(cartProduct.price * cartProduct.cnt).toLocaleString()}원
                </p>
              </div>
            )
          ) : null}
        </div>
        <div id="mobile" className="article_container">
          {typeof id !== "undefined" ? (
            id === 0 ? (
              cartProducts.map((cartProduct, index) => {
                return (
                  <>
                    <div className="row_product">
                      <p
                        dangerouslySetInnerHTML={{ __html: cartProduct.name }}
                      ></p>
                      <img src={cartProduct.imageUrl} alt="" />
                    </div>
                    <div className="row_head">
                      <p>수량</p>
                      <p>상품 할인</p>
                      <p>배송비</p>
                      <p>주문금액</p>
                    </div>
                    <div className="row_content">
                      <p>{cartProduct.cnt}</p>
                      <p>없음</p>
                      <p>무료</p>
                      <p>
                        {(cartProduct.price * cartProduct.cnt).toLocaleString()}
                        원
                      </p>
                    </div>{" "}
                  </>
                );
              })
            ) : (
              <>
                <div className="row_product">
                  <p dangerouslySetInnerHTML={{ __html: cartProduct.name }}></p>
                  <img src={cartProduct.imageUrl} alt="" />
                </div>
                <div className="row_head">
                  <p>수량</p>
                  <p>상품 할인</p>
                  <p>배송비</p>
                  <p>주문금액</p>
                </div>
                <div className="row_content">
                  <p>{cartProduct.cnt}</p>
                  <p>없음</p>
                  <p>무료</p>
                  <p>
                    {(cartProduct.price * cartProduct.cnt).toLocaleString()}원
                  </p>
                </div>
              </>
            )
          ) : null}
        </div>
        {typeof id !== "undefined" ? (
          id === 0 ? (
            <div
              className="pay_btn"
              onClick={() => {
                navigate("/complete");
              }}
            >
              {totalAmount.toLocaleString()}원 결제하기
            </div>
          ) : (
            <div
              className="pay_btn"
              onClick={() => {
                navigate("/complete");
              }}
            >
              {(cartProduct.price * cartProduct.cnt).toLocaleString()}원
              결제하기
            </div>
          )
        ) : null}

        <div className="space"></div>
      </div>
    </div>
  );
};

export default PayS3;
