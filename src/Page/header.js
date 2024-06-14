import React, { useState } from "react";
import "../CSS/header.css";
import "../CSS/header_mobile.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
  };

  return (
    <div className="header_container">
      <div className="header_left">
        <p
          onClick={() => {
            goPage("/about");
          }}
        >
          Brand Story
        </p>
        <p
          onClick={() => {
            goPage("/shop");
          }}
        >
          Shop
        </p>
      </div>
      <div className="header_logo">
        <img
          src={"/images/logo.png"}
          alt=""
          onClick={() => {
            goPage("/");
          }}
        />
      </div>
      <div id="pc" className="header_right">
        <div className="article">
          <img src={"/images/header_icon_cart.png"} alt="" />
          <p
            onClick={() => {
              goPage("/cart");
            }}
          >
            장바구니
          </p>
        </div>
        <div className="article">
          <img src={"/images/header_icon_mypage.png"} alt="" />
          <p
            onClick={() => {
              goPage("/mypage");
            }}
          >
            마이페이지
          </p>
        </div>
        <div className="article">
          <img src={"/images/header_icon_login.png"} alt="" />
          <p
            onClick={() => {
              goPage("/login");
            }}
          >
            로그인
          </p>
        </div>
      </div>
      <img
        id="mobile"
        src={
          menuState
            ? "/images/mobile/menuOff_btn.png"
            : "/images/mobile/menuOn_btn.png"
        }
        alt=""
        onClick={() => {
          setMenuState(!menuState);
        }}
      />
      <div
        id="mobile"
        className="header_menu"
        style={{ display: !menuState ? "none" : "block" }}
      >
        <div className="text_box">
          <p
            onClick={() => {
              goPage("/cart");
              setMenuState(!menuState);
            }}
          >
            장바구니
          </p>
          <p
            onClick={() => {
              goPage("/mypage");
              setMenuState(!menuState);
            }}
          >
            마이페이지
          </p>
          <p
            onClick={() => {
              goPage("/login");
              setMenuState(!menuState);
            }}
          >
            로그인
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
