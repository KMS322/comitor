import "../../CSS/board.css";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
const WriteModal = ({ setModalOpen }) => {
  const dispatch = useDispatch();
  const [board_title, onChangeTitle] = useInput("");
  const [board_content, onChangeContent] = useInput("");
  const [board_pw, onChangePw] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== board_pw);
    },
    [passwordCheck]
  );
  return (
    <div className="writeModal_container">
      <div className="writeModal_header">
        <h2>1:1 문의 글쓰기</h2>
        <button onClick={() => setModalOpen(false)}>닫기 X</button>
      </div>
      <div className="writeModal_content">
        <div className="input">
          <p>제목</p>
          <input
            type="text"
            name="board_title"
            value={board_title}
            onChange={onChangeTitle}
          />
        </div>
        <div className="input">
          <p>내용</p>
          <textarea
            type="text"
            name="board_content"
            value={board_content}
            onChange={onChangeContent}
          />
        </div>
        <div className="input">
          <p>비밀번호</p>
          <input
            type="password"
            name="board_pw"
            value={board_pw}
            onChange={onChangePw}
          />
        </div>
        <div className="input">
          <p>비밀번호 확인</p>
          <input
            type="password"
            name="user_pw"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
        </div>
        {passwordError && (
          <div style={{ color: "red", marginBottom: "1.72vw" }}>
            비밀번호가 일치하지 않습니다.
          </div>
        )}
      </div>
      <div className="btn_box">
        <p onClick={() => setModalOpen(false)}>취소</p>
        <p>작성</p>
      </div>
    </div>
  );
};

export default WriteModal;
