import "../../CSS/couponModal.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACCEPT_COUPON_REQUEST } from "../../reducers/coupon";
const CouponModal = ({ setModalOpen, coupon, user }) => {
  const userId = user && user.id;
  const couponCode = coupon.length > 0 && coupon[0].coupon_code;
  const dispatch = useDispatch();
  const { acceptCouponDone } = useSelector((state) => state.coupon);
  const acceptCoupon = () => {
    dispatch({
      type: ACCEPT_COUPON_REQUEST,
      data: { userId, couponCode },
    });
  };
  useEffect(() => {
    if (acceptCouponDone) {
      setModalOpen(false);
      window.location.href = "/";
    }
  }, [acceptCouponDone]);
  return (
    <div className="coupon_modal">
      <div className="article">
        <p onClick={() => setModalOpen(false)} className="x_box">
          X
        </p>
        <img
          src={`/images/coupon/${coupon.length > 0 && coupon[0].coupon_imgUrl}`}
        />
        <div className="btn_box">
          <button onClick={() => setModalOpen(false)}>닫기</button>
          <button
            onClick={() => {
              acceptCoupon();
            }}
          >
            쿠폰 받기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;