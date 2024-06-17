import "../CSS/adminUploadForm.css";
import React, { useState, useEffect, useCallback } from "react";
import useInput from "../Page/hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { UPLOAD_PRODUCT_REQUEST } from "../reducers/adminProduct";

const AdminUploadForm = ({ handlePopup }) => {
  const dispatch = useDispatch();
  const [product_name, onChangeName] = useInput("");
  const [product_originPrice, onChangeOriginPrice] = useInput("");
  const [product_salePrice, onChangeSalePrice] = useInput("");
  const [mainImage, setMainImage] = useState("");
  const [detailPage, setDetailPage] = useState("");
  const handleFileChange1 = (e, index) => {
    setMainImage(e.target.files[0]);
  };
  const handleFileChange2 = (e, index) => {
    setDetailPage(e.target.files[0]);
  };
  const sendData = useCallback(
    (e) => {
      e.preventDefault();
      console.log("product_name : ", product_name);
      console.log("product_originPrice : ", product_originPrice);
      console.log("product_salePrice : ", product_salePrice);
      console.log("mainImage : ", mainImage);
      console.log("detailPage : ", detailPage);
      dispatch({
        type: UPLOAD_PRODUCT_REQUEST,
        data: {
          product_name,
          product_originPrice,
          product_salePrice,
          mainImage,
          detailPage,
        },
      });
    },
    [
      product_name,
      product_originPrice,
      product_salePrice,
      mainImage,
      detailPage,
    ]
  );
  return (
    <div className="adminUploadForm">
      <img src="/images/delete_btn.png" alt="" onClick={handlePopup} />
      <div className="form_container">
        <div className="input_container">
          <div className="input_box">
            <p>상품명</p>
            <input
              type="text"
              name="product_name"
              value={product_name}
              onChange={onChangeName}
            />
          </div>
          <div className="input_box">
            <p>할인 전 가격(숫자만 입력하세요. ex : 26000)</p>
            <input
              type="number"
              name="product_originPrice"
              value={product_originPrice}
              onChange={onChangeOriginPrice}
            />
          </div>
          <div className="input_box">
            <p>할인 후 가격(숫자만 입력하세요. ex : 17900)</p>
            <input
              type="number"
              name="product_salePrice"
              value={product_salePrice}
              onChange={onChangeSalePrice}
            />
          </div>

          <div className="label_container">
            <label htmlFor="mainImage">
              <div className="upload_btn">
                <p>대표이미지 등록</p>
              </div>
            </label>
            <input
              id="mainImage"
              type="file"
              onChange={(e) => handleFileChange1(e)}
            />
            <p>{mainImage ? mainImage.name : "파일을 선택하세요"}</p>
          </div>
          <div className="label_container">
            <label htmlFor="detailPage">
              <div className="upload_btn">
                <p>상세페이지 등록</p>
              </div>
            </label>
            <input
              id="detailPage"
              type="file"
              onChange={(e) => handleFileChange2(e)}
            />
            <p>{detailPage ? detailPage.name : "파일을 선택하세요"}</p>
          </div>
        </div>
      </div>
      <div className="btn_box"></div>

      <div className="submit_btn" onClick={sendData}>
        업로드
      </div>
    </div>
  );
};

export default AdminUploadForm;
