import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/shopDetail.css";
import "../../CSS/shopDetail_mobile.css";
const ShopDetailS1 = ({ productId }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제`,
      imageUrl: "/images/product/product_img1.jpg",
      price: 17900,
      originPrice: 26000,
    },
    {
      id: 2,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제 2개`,
      imageUrl: "/images/product/product_img2.jpg",
      price: 34900,
      originPrice: 52000,
    },
    {
      id: 3,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제`,
      imageUrl: "/images/product/product_img3.jpg",
      price: 17900,
      originPrice: 26000,
    },
  ]);
  if (products === null) {
    setProducts({
      id: 1,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제`,
      imageUrl: "/images/product/product_img1.jpg",
      price: 17900,
      originPrice: 26000,
    });
  }
  const product = products.find((item) => item.id === Number(productId));

  const [selectedCnt, setSelectedCnt] = useState(1);
  const [liked, setLiked] = useState(false);

  const navigate = useNavigate();

  const calculateNextDateAndDay = () => {
    const currentDate = new Date();
    const nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    let nextDayOfWeek = daysOfWeek[nextDate.getDay()];

    if (nextDayOfWeek === "토" || nextDayOfWeek === "일") {
      const daysUntilMonday = nextDayOfWeek === "토" ? 2 : 1;
      nextDate.setDate(nextDate.getDate() + daysUntilMonday);
      nextDayOfWeek = "월";
    }

    return {
      nextDate,
      nextDayOfWeek,
    };
  };
  const { nextDate, nextDayOfWeek } = calculateNextDateAndDay();
  return (
    <div className="shopDetail_s1">
      <div className="section_container">
        <img src={product.imageUrl} alt="" />
        <div className="article">
          <p>BEST</p>
          <p dangerouslySetInnerHTML={{ __html: product.name }}></p>
          <p>{`${
            nextDate.getMonth() + 1
          }/${nextDate.getDate()}(${nextDayOfWeek}) 도착예정`}</p>
          <p>
            <span>{product.originPrice.toLocaleString()}원</span>
            {product.price.toLocaleString()}원
          </p>
          <div className="count_box">
            <p>수량</p>
            <div className="count">
              <div
                onClick={() => {
                  if (selectedCnt > 1) {
                    setSelectedCnt(selectedCnt - 1);
                  }
                }}
              >
                <img src="/images/product/minus_icon.png" alt="" />
              </div>
              <div>{selectedCnt}</div>
              <div
                onClick={() => {
                  setSelectedCnt(selectedCnt + 1);
                }}
              >
                <img src="/images/product/plus_icon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <p id="pc">
            <span>총 상품 금액(수량)</span>
            {(product.price * selectedCnt).toLocaleString()}
            <span>({selectedCnt}개)</span>
          </p>
          <div className="btn_box">
            <div
              className="btn"
              onClick={() => {
                navigate("/cart", { state: { product, selectedCnt } });
              }}
            >
              장바구니
            </div>
            <div
              className="btn"
              onClick={() => {
                navigate("/pay");
              }}
            >
              바로 주문
            </div>
          </div>
          <div
            className="like_box"
            onClick={() => {
              setLiked(!liked);
            }}
          >
            <img
              src={
                liked
                  ? "/images/mypage/heart_full.png"
                  : "/images/mypage/heart_empty.png"
              }
              alt=""
            />
            <p>좋아요</p>
          </div>
          <div id="mobile" className="total_price">
            <p>총 상품 금액(수량)</p>
            <p>{(product.price * selectedCnt).toLocaleString()}</p>
          </div>
          <p id="mobile" className="total_count">
            (1개)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailS1;
