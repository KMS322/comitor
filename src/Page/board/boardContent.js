import "../../CSS/board.css";
import React, { useState } from "react";
import WriteModal from "./writeModal";
import ReadModal from "./readModal";
const BoardContent = () => {
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [readModalOpen, setReadModalOpen] = useState(false);
  return (
    <div className="board_container">
      <p className="title">문의게시판</p>
      <div className="table">
        <div className="head_row row">
          <p>번호</p>
          <p>제목</p>
          <p>등록일</p>
          <p>답변여부</p>
          <p></p>
        </div>
        <div
          className="content_row row"
          onClick={() => {
            setReadModalOpen(true);
          }}
        >
          <p>1</p>
          <p>제목</p>
          <p>2024.06.21.</p>
          <p>답변대기</p>
          <p>삭제</p>
        </div>
        <div className="content_row row">
          <p>2</p>
          <p>제목</p>
          <p>2024.06.21.</p>
          <p>답변완료</p>
          <p>삭제</p>
        </div>
        <div
          className="btn_box"
          onClick={() => {
            setWriteModalOpen(true);
          }}
        >
          글작성
        </div>
      </div>
      {writeModalOpen && <WriteModal setModalOpen={setWriteModalOpen} />}
      {readModalOpen && <ReadModal setModalOpen={setReadModalOpen} />}
    </div>
  );
};

export default BoardContent;
