import "../CSS/adminOrders.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AdminSubHeader from "./adminSubHeader";
import { LOAD_ORDER_REQUEST } from "../reducers/order";

const AdminOrders = () => {
  const location = useLocation();
  const me = location.state && location.state.me;
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const uniqueOrders = orders.filter(
    (order, index, self) =>
      index ===
      self.findIndex(
        (o) =>
          o.order_code === order.order_code &&
          o.product_code === order.product_code
      )
  );

  console.log("uniqueOrders : ", uniqueOrders);

  useEffect(() => {
    dispatch({
      type: LOAD_ORDER_REQUEST,
    });
  }, [dispatch]);
  return (
    <>
      <AdminSubHeader data={"주문 관리"} />
      {/* {(me && me === "") || me.user_id === "admin" ? (
        <div className="adminOrders">
          <div className="upload_btn">
            <p
              onClick={() => {
                setOpenForm(true);
              }}
            >
              <span>+</span> 업로드
            </p>
          </div>
          <div className="table">
            <div className="head_row row">
              <p>상품코드</p>
              <p>상품명</p>
              <p>할인 전 가격</p>
              <p>할인 후 가격</p>
              <p>대표이미지</p>
              <p>상세페이지</p>
              <p></p>
            </div>
            {uniqueProducts &&
              uniqueProducts.map((product, index) => {
                console.log(
                  "  product.product_originPrice :  ",
                  typeof product.product_originPrice
                );
                return (
                  <div
                    className={
                      index % 2 === 0
                        ? "content_row row"
                        : "content_row row even_row"
                    }
                    key={index}
                  >
                    <p>{product.product_code}</p>
                    <p>{product.product_name}</p>
                    <p>{product.product_originPrice.toLocaleString()}원</p>
                    <p>{product.product_salePrice.toLocaleString()}원</p>
                    <p>{product.product_imgUrl}</p>
                    <p>{product.product_detailUrl}</p>
                    <div
                      className="btn_box"
                      onClick={() => {
                        deleteProduct(product.product_code);
                      }}
                    >
                      <p>삭제</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        ""
      )} */}
    </>
  );
};

export default AdminOrders;
