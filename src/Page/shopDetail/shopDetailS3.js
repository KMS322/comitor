import "../../CSS/shopDetail.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_PRODUCT_REVIEW_REQUEST } from "../../reducers/review";
const ShopDetailS3 = ({ productCode }) => {
  const dispatch = useDispatch();
  const { productReviews } = useSelector((state) => state.review);
  const [uniqueReviews, setUniqueReviews] = useState([]);
  console.log("uniqueReviews : ", uniqueReviews);

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

    setUniqueReviews(removeDuplicatesById(productReviews));
  }, [productReviews]);
  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCT_REVIEW_REQUEST,
      data: { productCode },
    });
  }, [dispatch]);
  return (
    <div className="shopDetail_s3">
      <div className="section_container">
        <p>Review</p>
        <div className="row_head">
          <p>추천순</p>
          <p>최신순</p>
          <p>별점순</p>
        </div>
        {uniqueReviews &&
          uniqueReviews.map((review, index) => {
            return (
              <div className="row_content" key={index}>
                <div className="star_box" style={{ marginTop: "1vw" }}>
                  {[...Array(5)].map((_, index) => (
                    <p style={{ cursor: "inherit" }} key={index}>
                      {review.star_point > index ? "★" : "☆"}
                    </p>
                  ))}
                </div>
                <div className="comment_box">{review.review_comment}</div>

                <div className="img_box">
                  {review.review_imgUrl1 !== "0" ? (
                    <img
                      src={`/images/reviewImage/${review.review_imgUrl1}`}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {review.review_imgUrl2 !== "0" ? (
                    <img
                      src={`/images/reviewImage/${review.review_imgUrl2}`}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {review.review_imgUrl3 !== "0" ? (
                    <img
                      src={`/images/reviewImage/${review.review_imgUrl3}`}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShopDetailS3;
