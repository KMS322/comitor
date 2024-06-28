import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_ORDER_REQUEST } from "../../reducers/order";
import { LOAD_PRODUCT_REQUEST } from "../../reducers/adminProduct";
import { LOAD_REVIEW_REQUEST } from "../../reducers/review";
import ReviewWriteModal from "./reviewWriteModal";
import "../../CSS/mypage.css";
const MypageS2 = ({ userId }) => {
  const dispatch = useDispatch();
  const { userProducts } = useSelector((state) => state.order);
  const { products } = useSelector((state) => state.adminProduct);
  const { userReviews } = useSelector((state) => state.review);
  const [popupState, setPopupState] = useState(false);
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const [uniqueReviews, setUniqueReviews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  console.log("uniqueReviews : ", uniqueReviews);
  useEffect(() => {
    dispatch({
      type: LOAD_USER_ORDER_REQUEST,
      data: { userId },
    });
  }, [dispatch]);
  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCT_REQUEST,
    });
  }, [dispatch]);
  useEffect(() => {
    dispatch({
      type: LOAD_REVIEW_REQUEST,
      data: { userId },
    });
  }, [dispatch]);
  useEffect(() => {
    const removeDuplicatesById = (lists) => {
      if (!lists || !Array.isArray(lists)) {
        return [];
      }
      const uniqueLists = [];
      const existingIds = [];

      for (const list of lists) {
        if (
          list &&
          list.product_code &&
          !existingIds.includes(list.product_code)
        ) {
          uniqueLists.push(list);
          existingIds.push(list.product_code);
        }
      }

      return uniqueLists;
    };

    setUniqueProducts(removeDuplicatesById(products));
  }, [products]);

  useEffect(() => {
    const removeDuplicatesById = (lists) => {
      if (!lists || !Array.isArray(lists)) {
        return [];
      }
      const uniqueLists = [];
      const existingIds = [];

      for (const list of lists) {
        if (list && list.id && !existingIds.includes(list.id)) {
          uniqueLists.push(list);
          existingIds.push(list.id);
        }
      }

      return uniqueLists;
    };

    setUniqueReviews(removeDuplicatesById(userReviews));
  }, [userReviews]);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const formattedTime = date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${formattedDate} ${formattedTime}`;
  };

  const uploadReview = (code) => {
    setModalOpen(code);
  };

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
              <p>주문금액(수량)</p>
              <p>주문상태</p>
            </div>
            {userProducts &&
              userProducts.map((userProduct, index) => {
                const product = uniqueProducts.find(
                  (item) => item.product_code === userProduct.product_code
                );
                const review = uniqueReviews.find(
                  (item) =>
                    item.order_code === userProduct.order_code &&
                    item.product_code === userProduct.product_code
                );
                console.log("review : ", review);
                return (
                  <div className="content" key={index}>
                    <div className="item_box">
                      <div className="img_box">
                        <img
                          src={`/images/mainImage/${product.product_imgUrl}`}
                          alt=""
                        />
                      </div>
                      <p
                      // dangerouslySetInnerHTML={{ __html: orderedProduct.name }}
                      >
                        {product.product_name}
                      </p>
                    </div>
                    <p>{formatDateTime(userProduct.createdAt)}</p>
                    <p>
                      {product.product_salePrice.toLocaleString()}원(
                      {userProduct.product_cnt}개)
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
                      {review && review.review_comment === null ? (
                        <div
                          className="btn"
                          onClick={() => {
                            uploadReview(review.review_code);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          리뷰쓰기
                        </div>
                      ) : (
                        <div className="btn">리뷰수정</div>
                      )}
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
      {modalOpen && (
        <ReviewWriteModal setModalOepn={setModalOpen} id={modalOpen} />
      )}
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
