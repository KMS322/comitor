import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PayModal from "./payModal";
import "../../CSS/pay.css";
import "../../CSS/pay_mobile.css";
const PayS3 = ({ carts, deliveryInfo }) => {
  const navigate = useNavigate();
  console.log("deliveryInfo : ", deliveryInfo);
  const { products } = useSelector((state) => state.adminProduct);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [orderData, setOrderData] = useState();
  useEffect(() => {
    let total = 0;
    carts.map((cart) => {
      if (cart.checked) {
        const product = products.find(
          (item) => item.product_code === cart.product_code
        );
        total += product.product_salePrice * cart.product_cnt;
      }
    });
    setTotalPrice(total);
  }, [carts]);

  const handlePaymentClick = () => {
    const data = {
      carts,
      deliveryInfo,
    };
    setOrderData(data);
    setModalOpen(true);
  };
  return (
    <div className="pay_s3">
      <div className="section_container">
        <p>상품 정보</p>
        <div id="pc" className="article_container">
          <div className="row_head">
            <p>상품 정보</p>
            <p>수량</p>
            <p>할인 쿠폰</p>
            <p>배송비</p>
            <p>주문금액</p>
          </div>
          {carts &&
            carts.map((cart, index) => {
              const selectedProduct = products.find(
                (item) => item.product_code === cart.product_code
              );
              return (
                <div className="row_content" key={index}>
                  <div className="item_box">
                    <img
                      src={`/images/mainImage/${selectedProduct.product_imgUrl}`}
                      alt=""
                    />
                    <p
                    // dangerouslySetInnerHTML={{
                    //   __html: selectedProduct.product_name,
                    // }}
                    >
                      {selectedProduct.product_name}
                    </p>
                  </div>
                  <p>{cart.product_cnt}</p>
                  <p>없음</p>
                  <p>무료</p>
                  <p>
                    {" "}
                    {(
                      selectedProduct.product_salePrice * cart.product_cnt
                    ).toLocaleString()}
                    원
                  </p>
                </div>
              );
            })}
          <div className="total_price_box">
            <p>총 결제금액</p>
            <p>{totalPrice.toLocaleString()}원</p>
          </div>
          <div className="btn_box">
            <div className="btn" onClick={handlePaymentClick}>
              결제하기
            </div>
          </div>
        </div>
        {/* <div id="mobile" className="article_container">
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
        </div> */}
        {/* {typeof id !== "undefined" ? (
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
        ) : null} */}

        <div className="space"></div>
      </div>
      {modalOpen && (
        <PayModal setModalOpen={setModalOpen} orderInfo={orderData} />
      )}
    </div>
  );
};

export default PayS3;
