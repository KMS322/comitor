import "../../CSS/board.css";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
const ReadModal = ({ setModalOpen }) => {
  const dispatch = useDispatch();

  return (
    <div className="readModal_container">
      <div className="readModal_header">
        <h2></h2>
        <button onClick={() => setModalOpen(false)}>닫기 X</button>
      </div>
      <div className="readModal_content">
        <div className="text_box">
          <p>제목</p>
          <div>
            <p>이건 제목입니다.</p>
          </div>
        </div>
        <div className="text_box">
          <p>내용</p>
          <div>
            <p>이건 내용입니다.</p>
          </div>
        </div>
        <div className="text_box">
          <p>답변내용</p>
          <div>
            <p>이건 답변내용입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadModal;
