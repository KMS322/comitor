import "../../CSS/board.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_BOARD_REQUEST } from "../../reducers/board";
import WriteModal from "./writeModal";
import ReadModal from "./readModal";
import PwModal from "./pwModal";
const BoardContent = () => {
  const dispatch = useDispatch();
  const { boardLists } = useSelector((state) => state.board);
  const { me } = useSelector((state) => state.user);
  console.log("me : ", me);
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [pwModalOpen, setPwModalOpen] = useState(null);
  const [readModalOpen, setReadModalOpen] = useState(null);
  const [commentModalOpen, setCommentModalOpen] = useState(null);

  useEffect(() => {
    dispatch({
      type: LOAD_BOARD_REQUEST,
    });
  }, [dispatch]);
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
  const uniqueBoardLists = removeDuplicatesById(boardLists);
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    return `${formattedDate}`;
  };

  const handlePasswordSuccess = (id) => {
    setPwModalOpen(null);
    setReadModalOpen(id);
  };
  const closeReadModal = () => {
    setReadModalOpen(null);
  };
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
        {uniqueBoardLists &&
          uniqueBoardLists.map((list, index) => {
            return (
              <div className="content_row row" key={index}>
                <p>{index + 1}</p>
                <p
                  onClick={() => {
                    setPwModalOpen(list.id);
                  }}
                >
                  {list.board_title}
                </p>
                <p>{formatDateTime(list.createdAt)}</p>
                {me && me ? (
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCommentModalOpen(true);
                    }}
                  >
                    답변여부
                  </p>
                ) : (
                  <p>답변여부</p>
                )}
                <p>삭제</p>
              </div>
            );
          })}

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
      {pwModalOpen && (
        <PwModal
          setModalOpen={setPwModalOpen}
          id={pwModalOpen}
          onPasswordSuccess={handlePasswordSuccess}
        />
      )}
      {readModalOpen && (
        <ReadModal setModalOpen={closeReadModal} id={readModalOpen} />
      )}
    </div>
  );
};

export default BoardContent;
