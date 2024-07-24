import "../../CSS/main.css";
import "../../CSS/main_mobile.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ALL_REVIEW_REQUEST } from "../../reducers/review";
const MainS5 = () => {
  const dispatch = useDispatch();
  const { allReviews } = useSelector((state) => state.review);
  const [uniqueReviews, setUniqueReviews] = useState([]);
  console.log("uniqueReviews : ", uniqueReviews);

  useEffect(() => {
    dispatch({
      type: LOAD_ALL_REVIEW_REQUEST,
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
        if (list && list.id && !existingIds.includes(list.id)) {
          uniqueLists.push(list);
          existingIds.push(list.id);
        }
      }

      return uniqueLists;
    };

    setUniqueReviews(removeDuplicatesById(allReviews));
  }, [allReviews]);
  return (
    <div className="main_s5">
      <p>REVIEW</p>
      <div className="article_container">
        {uniqueReviews &&
          uniqueReviews.map((review, index) => {
            return (
              <div className="article" key={index}>
                <img
                  src={`/images/reviewImage/${review.review_imgUrl1}`}
                  alt=""
                />
                <div className="star_box">
                  {[...Array(5)].map((_, index) => (
                    <p style={{ cursor: "inherit" }} key={index}>
                      {review.star_point > index ? "★" : "☆"}
                    </p>
                  ))}
                </div>
                <div className="comment_box">{review.review_comment}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MainS5;
