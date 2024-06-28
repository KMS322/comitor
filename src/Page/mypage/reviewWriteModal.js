import "../../CSS/mypage.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
const ReviewWriteModal = ({ setModalOpen, id }) => {
  console.log("id : ", id);
  const dispatch = useDispatch();
  const [review_content, onChangeContent] = useInput("");
  const [starPoint, setStarPoint] = useState(0);
  const [reviewImage1, setReviewImage1] = useState("");
  const [selectedFileName1, setSelectedFileName1] = useState("");
  const [reviewImage2, setReviewImage2] = useState("");
  const [selectedFileName2, setSelectedFileName2] = useState("");
  const [reviewImage3, setReviewImage3] = useState("");
  const [selectedFileName3, setSelectedFileName3] = useState("");

  const handleFileChange1 = (e) => {
    const attachedFile = e.target.files[0];
    setReviewImage1(attachedFile);
    setSelectedFileName1(attachedFile ? attachedFile.name : "");
  };
  const handleFileChange2 = (e) => {
    const attachedFile = e.target.files[0];
    setReviewImage2(attachedFile);
    setSelectedFileName2(attachedFile ? attachedFile.name : "");
  };
  const handleFileChange3 = (e) => {
    const attachedFile = e.target.files[0];
    setReviewImage3(attachedFile);
    setSelectedFileName3(attachedFile ? attachedFile.name : "");
  };
  const addReview = async (e) => {
    e.preventDefault();

    try {
      if (!reviewImage1) {
        alert("배너 이미지를 선택해주세요.");
        return;
      }

      const formData = new FormData();
      formData.append(
        "file",
        reviewImage1,
        encodeURIComponent(reviewImage1.name)
      );
      await axios.post("/review/uploadFiles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      formData.append(
        "file",
        reviewImage2,
        encodeURIComponent(reviewImage2.name)
      );
      await axios.post("/review/uploadFiles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      formData.append(
        "file",
        reviewImage3,
        encodeURIComponent(reviewImage3.name)
      );
      await axios.post("/review/uploadFiles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // dispatch({
      //   type: ADD_BANNER_REQUEST,
      //   data: {
      //     bannerImage: selectedFileName,
      //   },
      // });
    } catch (error) {
      console.error("Error uploading files", error);
    }
  };

  return (
    <div className="reviewWriteModal_container">
      <div className="reviewWriteModal_header">
        <h2>리뷰쓰기</h2>
        <button onClick={() => setModalOpen(false)}>닫기 X</button>
      </div>
      <div className="star_box">
        <div className="text">별점</div>
        <p
          onClick={() => {
            setStarPoint(1);
          }}
        >
          {starPoint > 0 ? "★" : "☆"}
        </p>
        <p
          onClick={() => {
            setStarPoint(2);
          }}
        >
          {starPoint > 1 ? "★" : "☆"}
        </p>
        <p
          onClick={() => {
            setStarPoint(3);
          }}
        >
          {starPoint > 2 ? "★" : "☆"}
        </p>
        <p
          onClick={() => {
            setStarPoint(4);
          }}
        >
          {starPoint > 3 ? "★" : "☆"}
        </p>
        <p
          onClick={() => {
            setStarPoint(5);
          }}
        >
          {starPoint > 4 ? "★" : "☆"}
        </p>
      </div>
      <div className="reviewWriteModal_content">
        <div className="input">
          <p>내용</p>
          <textarea
            type="text"
            name="review_content"
            value={review_content}
            onChange={onChangeContent}
          />
        </div>
      </div>
      <div className="reviewWriteModal_content" style={{ marginBottom: "0vw" }}>
        <div className="input">
          <p>이미지 등록</p>
        </div>
      </div>
      <div className="form_container">
        <div className="input_container">
          <div className="label_container">
            <label htmlFor="reviewImage1">
              <div className="upload_btn">
                <p>사진 찾기</p>
              </div>
            </label>
            <input
              id="reviewImage1"
              type="file"
              onChange={(e) => handleFileChange1(e)}
            />
            <p>{reviewImage1 ? reviewImage1.name : "파일을 선택하세요"}</p>
          </div>
        </div>
      </div>
      <div className="form_container">
        <div className="input_container">
          <div className="label_container">
            <label htmlFor="reviewImage2">
              <div className="upload_btn">
                <p>사진 찾기</p>
              </div>
            </label>
            <input
              id="reviewImage2"
              type="file"
              onChange={(e) => handleFileChange2(e)}
            />
            <p>{reviewImage2 ? reviewImage2.name : "파일을 선택하세요"}</p>
          </div>
        </div>
      </div>
      <div className="form_container">
        <div className="input_container">
          <div className="label_container">
            <label htmlFor="reviewImage3">
              <div className="upload_btn">
                <p>사진 찾기</p>
              </div>
            </label>
            <input
              id="reviewImage3"
              type="file"
              onChange={(e) => handleFileChange3(e)}
            />
            <p>{reviewImage3 ? reviewImage3.name : "파일을 선택하세요"}</p>
          </div>
        </div>
      </div>
      <div className="btn_box">
        <p onClick={() => setModalOpen(false)}>취소</p>
        <p onClick={addReview}>작성</p>
      </div>
    </div>
  );
};

export default ReviewWriteModal;
