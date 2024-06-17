import "../CSS/adminLists.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AdminSubHeader from "./adminSubHeader";
import UploadForm from "./adminUploadForm";
// import Loading from "./loading";
const AdminLists = () => {
  const location = useLocation();
  const me = location.state && location.state.me;
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  const [openLoading, setOpenLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");

  return (
    <>
      <AdminSubHeader data={"영상 관리"} />
      {(me && me === "") || me.user_id === "admin" ? (
        <div className="adminLists">
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
              <p>NO</p>
              <p>상품명</p>
              <p>할인 전 가격</p>
              <p>할인 후 가격</p>
              <p>대표이미지</p>
              <p>상세페이지</p>
              <p></p>
            </div>
            {/* {videoLists &&
              videoLists.map((list, index) => {
                return ( */}
            {/* <div
              className={
                index % 2 === 0 ? "content_row row" : "content_row row even_row"
              }
            > */}
            <div className="content_row row">
              <p>1</p>
              <p>코미토르 밸런스 펫 세럼 강아지 발습진 발사탕 피부병 보습제</p>
              <p>26000원</p>
              <p>17900원</p>
              <p>image1.jpg</p>
              <p>detail1.jpg</p>
              <div className="btn_box">
                <p>삭제</p>
              </div>
            </div>
            <div className="content_row row even_row">
              <p>1</p>
              <p>코미토르 밸런스 펫 세럼 강아지 발습진 발사탕 피부병 보습제</p>
              <p>26000원</p>
              <p>17900원</p>
              <p>image1.jpg</p>
              <p>detail1.jpg</p>
              <div className="btn_box">
                <p>삭제</p>
              </div>
            </div>
            {/* );
              })} */}
          </div>
          {openForm ? (
            <UploadForm
              handlePopup={() => {
                setOpenForm(false);
              }}
            />
          ) : (
            ""
          )}
          {/* {openLoading ? <Loading data={loadingMsg} /> : ""} */}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminLists;
