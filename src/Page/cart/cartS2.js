import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../CSS/cart.css";
import "../../CSS/cart_mobile.css";
const CartS2 = () => {
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
  };
  const location = useLocation();
  const { product = {}, selectedCnt = 0 } = location.state || {};
  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제`,
      name_mobile: `코미토르 밸런스 펫 세럼 강아지 발습진 발사탕 피부병 보습제`,
      imageUrl: "/images/product/product_img1.jpg",
      price: 17900,
      originPrice: 26000,
      cnt: 1,
      checked: true,
    },
    {
      id: 2,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제 2개`,
      name_mobile: `코미토르 밸런스 펫 세럼 강아지 발습진 발사탕 피부병 보습제 2개`,
      imageUrl: "/images/product/product_img2.jpg",
      price: 34900,
      originPrice: 52000,
      cnt: 1,
      checked: true,
    },
  ]);
  useEffect(() => {
    setCartProducts((prevCartProducts) => {
      if (selectedCnt > 0) {
        const updatedProduct = { ...product, cnt: selectedCnt };
        updatedProduct.id = prevCartProducts.length + 1;
        return [...prevCartProducts, updatedProduct];
      }
      return [...prevCartProducts];
    });
  }, [product, selectedCnt]);

  const cancelProduct = (productID) => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.id !== productID
    );
    setCartProducts(updatedCartProducts);
  };

  const totalAmount = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.cnt;
  }, 0);

  const toggleChecked = (productId) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, checked: !product.checked };
        }
        return product;
      });
    });
  };

  const toggleAllChecked = () => {
    setCartProducts((prevCartProducts) => {
      const allChecked = prevCartProducts.every((product) => product.checked);
      return prevCartProducts.map((product) => ({
        ...product,
        checked: !allChecked,
      }));
    });
  };

  return (
    <div className="cart_s2">
      <div id="pc" className="section_container">
        <div className="article_container">
          <div className="title">
            <img
              src={
                cartProducts.every((product) => product.checked)
                  ? "/images/mypage/check_full.png"
                  : "/images/mypage/check_empty.png"
              }
              alt=""
              onClick={toggleAllChecked}
            />
            <p>상품정보</p>
            <p>상품금액</p>
            <p>수량</p>
            <p>주문금액</p>
            <p>배송 형태/배송비</p>
            <p></p>
          </div>
          {cartProducts.map((cartProduct, index) => {
            return (
              <div className="content">
                <img
                  src={
                    cartProduct.checked
                      ? "/images/mypage/check_full.png"
                      : "/images/mypage/check_empty.png"
                  }
                  alt=""
                  onClick={() => toggleChecked(cartProduct.id)}
                />
                <div className="item_box">
                  <img src={cartProduct.imageUrl} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: cartProduct.name }}></p>
                </div>
                <div className="price_box">
                  <p>{cartProduct.originPrice.toLocaleString()}원</p>
                  <p>{cartProduct.price.toLocaleString()}원</p>
                </div>
                <div className="count_box">
                  <div
                    onClick={() => {
                      if (cartProduct.cnt > 1) {
                        const updatedCartProducts = [...cartProducts];
                        updatedCartProducts[index].cnt--;
                        setCartProducts(updatedCartProducts);
                      }
                    }}
                  >
                    <img src="/images/product/minus_icon.png" alt="" />
                  </div>
                  <div>{cartProduct.cnt}</div>
                  <div
                    onClick={() => {
                      const updatedCartProducts = [...cartProducts];
                      updatedCartProducts[index].cnt++;
                      setCartProducts(updatedCartProducts);
                    }}
                  >
                    <img src="/images/product/plus_icon.png" alt="" />
                  </div>
                </div>
                <p>
                  {(cartProduct.price * cartProduct.cnt).toLocaleString()}원
                </p>
                <div className="delivery_box">
                  <p>택배배송</p>
                  <p>배송비 무료</p>
                </div>
                <div className="pay_box">
                  <div
                    onClick={() => {
                      navigate("/pay", {
                        state: { cartProducts, id: cartProduct.id },
                      });
                    }}
                  >
                    결제하기
                  </div>
                  <div onClick={() => cancelProduct(cartProduct.id)}>취소</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total_price_box">
          <p>총 결제금액</p>
          <p>{totalAmount.toLocaleString()}원</p>
        </div>
        <div className="btn_box">
          <div
            className="btn"
            onClick={() => {
              goPage("/shop");
            }}
          >
            더 담으러 가기
          </div>
          <div
            className="btn"
            onClick={() => {
              navigate("/pay", { state: { cartProducts, id: 0 } });
            }}
          >
            결제하기
          </div>
        </div>
        <div className="space"></div>
      </div>
      <div id="mobile" className="article_container">
        <p>장바구니</p>
        <div className="row_head">
          <p>상품정보</p>
          <p>상품금액</p>
          <div>
            <p>주문금액</p>
            <p>배송형태/배송비</p>
          </div>
          <p>수량</p>
        </div>
        {cartProducts.map((cartProduct, index) => {
          return (
            <>
              <div className="row_name">
                <img src="/images/mypage/check_box_full.png" alt="" />
                <p>{cartProduct.name_mobile}</p>
              </div>
              <div className="row_content">
                <img src={cartProduct.imageUrl} alt="" />
                <div className="price_box">
                  <p>{cartProduct.originPrice.toLocaleString()}원</p>
                  <p>{cartProduct.price.toLocaleString()}원</p>
                </div>
                <div className="delivery_box">
                  <p>
                    {(cartProduct.price * cartProduct.cnt).toLocaleString()}원
                  </p>
                  <p>택배배송/배송비무료</p>
                </div>
                <div className="count_box">
                  <div
                    onClick={() => {
                      if (cartProduct.cnt > 1) {
                        const updatedCartProducts = [...cartProducts];
                        updatedCartProducts[index].cnt--;
                        setCartProducts(updatedCartProducts);
                      }
                    }}
                  >
                    <img src="/images/product/minus_icon.png" alt="" />
                  </div>
                  <div>{cartProduct.cnt}</div>
                  <div
                    onClick={() => {
                      const updatedCartProducts = [...cartProducts];
                      updatedCartProducts[index].cnt++;
                      setCartProducts(updatedCartProducts);
                    }}
                  >
                    <img src="/images/product/plus_icon.png" alt="" />
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <div className="pay_btn">
          총 {totalAmount.toLocaleString()}원 결제하기
        </div>
        <div className="more_btn">더 담으러 가기</div>
      </div>
    </div>
  );
};

export default CartS2;
