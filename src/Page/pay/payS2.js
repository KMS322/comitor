import React, { useState } from "react";
import "../../CSS/pay.css";
import "../../CSS/pay_mobile.css";
const PayS2 = () => {
  const [checked, setChecked] = useState(true); // true : 기본 배송지, false : 직접 입력
  return (
    <div className="pay_s2">
      <div className="section_container">
        <p>배송정보</p>
        <div className="article_container">
          <div className="row">
            <div className="row_head">배송지</div>
            <div className="row_content">
              <div className="check_box">
                <img
                  src={
                    checked
                      ? "/images/pay/checked_img.png"
                      : "/images/pay/unchecked_img.png"
                  }
                  alt=""
                  onClick={() => {
                    if (checked === false) {
                      setChecked(!checked);
                    }
                  }}
                />
                <p>기본 배송지</p>
              </div>
              <div className="check_box">
                <img
                  src={
                    checked
                      ? "/images/pay/unchecked_img.png"
                      : "/images/pay/checked_img.png"
                  }
                  alt=""
                  onClick={() => {
                    if (checked === true) {
                      setChecked(!checked);
                    }
                  }}
                />
                <p>직접 입력</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row_head">이름 / 연락처</div>
            <div id="pc" className="row_content">
              OOO | 010-0000-0000
            </div>
            <div id="mobile" className="row_content">
              OOO
              <br />
              010-0000-0000
            </div>
          </div>
          <div className="row">
            <div className="row_head">주소</div>
            <div className="row_content">
              경상북도 경산시 하양읍 하양로 13-13 창업보육센터동 505호
            </div>
          </div>
          <div className="row">
            <div className="row_head">배송 요청사항</div>
            <div className="row_content">
              <select />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayS2;
