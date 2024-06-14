import React, { useState } from "react";
import "../../CSS/mypage.css";
const MypageS2 = () => {
  const [popupState, setPopupState] = useState(false);
  const [orderedProducts, setOrderedProducts] = useState([
    {
      id: 1,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제`,
      imageUrl: "/images/product/product_img1.jpg",
      price: 17900,
      originPrice: 26000,
      cnt: 1,
      orderedDate: "2023.10.24",
      orderedNum: "202310241002",
    },
  ]);
  if (orderedProducts === null) {
    setOrderedProducts({
      id: 1,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제`,
      imageUrl: "/images/product/product_img1.jpg",
      price: 17900,
      originPrice: 26000,
      cnt: 1,
      orderedDate: "2023.10.24",
      orderedNum: "202310241002",
    });
  }
  return (
    <>
      <div className="mypage_s2">
        <div id="pc" className="section_container">
          <p>
            주문 내역<span>최근 3개월만 표시됩니다.</span>
          </p>
          <div className="article_container">
            <div className="title">
              <p>상품정보</p>
              <p>주문일자</p>
              <p>주문번호</p>
              <p>주문금액(수량)</p>
              <p>주문상태</p>
            </div>
            {orderedProducts.map((orderedProduct, index) => {
              return (
                <div className="content">
                  <div className="item_box">
                    <div className="img_box">
                      <img src={orderedProduct.imageUrl} alt="" />
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: orderedProduct.name }}
                    ></p>
                  </div>
                  <p>{orderedProduct.orderedDate}</p>
                  <p>{orderedProduct.orderedNum}</p>
                  <p>
                    {orderedProduct.price.toLocaleString()}원(
                    {orderedProduct.cnt}개)
                  </p>
                  <div className="order_state">
                    <p>출고 준비중</p>
                    <div
                      className="btn"
                      onClick={() => {
                        setPopupState(!popupState);
                      }}
                    >
                      배송조회
                    </div>
                    <div className="btn">리뷰쓰기</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="mobile" className="article_container">
          <div className="title_box">
            <p>주문 내역</p>
            <p>최근 3개월만 표시됩니다</p>
          </div>
          <div className="row_head">
            <p>상품정보</p>
            <div className="order_box">
              <p>주문일자</p>
              <p>주문번호</p>
            </div>
          </div>
          <div className="row_content">
            <div className="item_box">
              <img src="/images/product/product2.png" alt="" />
              <p>
                코미토르 밸런스 펫 세럼
                <br />
                강아지 발사탕 피부병 보습제
              </p>
            </div>
            <div className="content_box">
              <p>2023.10.24</p>
              <p>202310241002</p>
              <div>주문금액(수량)</div>
              <p>34,900원(1개)</p>
              <div>주문상태</div>
              <div className="btn">배송조회</div>
              <div className="btn">리뷰쓰기</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="delivery_popup"
        style={{ display: popupState === true ? "block" : "none" }}
      >
        <img src="/images/logo.png" alt="" />
        <p>배송 조회</p>
        <div className="delivery_state">
          <div className="state">
            <p>현재상태</p>
            <p>구매확정</p>
          </div>
          <div className="state">
            <p>송장 번호</p>
            <p>6861514299903(우체국택배)</p>
          </div>
        </div>
        <div className="delivery_container">
          <div className="head">
            <p>배송시간</p>
            <p>현재위치</p>
            <p>배송내용</p>
            <p>지점 연락처</p>
            <p>기사 연락처</p>
          </div>
          <div className="content">
            <p>2023-06-29 12:14:00</p>
            <p>경산하양우체국</p>
            <p>배달완료</p>
            <p>053-000-0000</p>
            <p>010-1234-5678</p>
          </div>
          <div className="content">
            <p>2023-06-29 12:14:00</p>
            <p>경산하양우체국</p>
            <p>배달완료</p>
            <p>053-000-0000</p>
            <p>010-1234-5678</p>
          </div>
          <div className="content">
            <p>2023-06-29 12:14:00</p>
            <p>씨제이에스로지스하양물류센터</p>
            <p>배달완료</p>
            <p>053-000-0000</p>
            <p>010-1234-5678</p>
          </div>
          <div className="content">
            <p>2023-06-29 12:14:00</p>
            <p>씨제이에스로지스하양물류센터</p>
            <p>배달완료</p>
            <p>053-000-0000</p>
            <p>010-1234-5678</p>
          </div>
          <div className="content">
            <p>2023-06-29 12:14:00</p>
            <p>대구우편집중국</p>
            <p>배달완료</p>
            <p>053-000-0000</p>
            <p>010-1234-5678</p>
          </div>
          <div className="content">
            <p>2023-06-29 12:14:00</p>
            <p>대구우편집중국</p>
            <p>배달완료</p>
            <p>053-000-0000</p>
            <p>010-1234-5678</p>
          </div>
          <div className="content">
            <p>2023-06-29 12:14:00</p>
            <p>씨제이에스로지스하양물류센터</p>
            <p>배달완료</p>
            <p>053-000-0000</p>
            <p>010-1234-5678</p>
          </div>
        </div>
        <img
          src="/images/mypage/delete_btn.png"
          alt=""
          onClick={() => {
            setPopupState(!popupState);
          }}
        />
      </div>
      <div
        className="black"
        style={{ display: popupState === true ? "block" : "none" }}
        onClick={() => {
          setPopupState(!popupState);
        }}
      ></div>
    </>
  );
};

export default MypageS2;
