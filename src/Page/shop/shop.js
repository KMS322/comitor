import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/shop.css";
import "../../CSS/shop_mobile.css";
const Shop = () => {
  const navigate = useNavigate();

  const goPage = (id) => {
    navigate(`/shopDetail/${id}`);
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제`,
      imageUrl: "/images/product/product_img1.jpg",
      price: 17900,
    },
    {
      id: 2,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제 2개`,
      imageUrl: "/images/product/product_img2.jpg",
      price: 34900,
    },
    {
      id: 3,
      name: `코미토르 밸런스 펫 세럼<br />강아지 발습진 발사탕 피부병 보습제`,
      imageUrl: "/images/product/product_img3.jpg",
      price: 17900,
    },
  ]);

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortKey, setSortKey] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const handleSort = (sortBy) => {
    let sortedProducts = [...products];

    if (sortKey === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      sortedProducts.reverse();
    } else {
      setSortKey(sortBy);
      setSortOrder("asc");
      sortedProducts.sort((a, b) => {
        if (sortBy === "id") {
          return b[sortBy] - a[sortBy];
        } else if (sortBy === "name") {
          return a[sortBy].localeCompare(b[sortBy]);
        } else if (sortBy === "price") {
          return a[sortBy] - b[sortBy];
        }
        return 0;
      });
    }

    setProducts(sortedProducts);
    setSelectedStyle(sortBy);
  };

  return (
    <div className="shop">
      <div className="shop_container">
        <p>Shop</p>
        <div className="nav">
          <p>2개의 상품이 있습니다.</p>
          <ul id="pc">
            <li
              onClick={() => {
                handleSort("id");
              }}
              style={{
                color: selectedStyle === "id" ? "#000035" : "inherit",
              }}
            >
              신상품
            </li>
            <li
              onClick={() => handleSort("name")}
              style={{
                color: selectedStyle === "name" ? "#000035" : "inherit",
              }}
            >
              상품명
            </li>
            <li
              onClick={() => handleSort("price")}
              style={{
                color:
                  selectedStyle === "price" && sortOrder === "asc"
                    ? "#000035"
                    : "inherit",
              }}
            >
              낮은가격
            </li>
            <li
              onClick={() => handleSort("price")}
              style={{
                color:
                  selectedStyle === "price" && sortOrder === "desc"
                    ? "#000035"
                    : "inherit",
              }}
            >
              높은가격
            </li>
          </ul>
          <select id="mobile" />
        </div>
        <div className="article_container">
          {products.map((product, index) => {
            return (
              <div
                className="article"
                key={index}
                onClick={() => {
                  goPage(product.id);
                }}
              >
                <img src={product.imageUrl} alt="" />
                <p
                  className="product_title"
                  dangerouslySetInnerHTML={{ __html: product.name }}
                ></p>
                <p className="product_price">
                  {product.price.toLocaleString()}원
                </p>
              </div>
            );
          })}
        </div>
        <div className="page_list">
          <p>{`< 1 >`}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
