import "../CSS/adminMain.css";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AdminSubHeader from "./adminSubHeader";
const AdminMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const me = location.state && location.state.me;
  console.log("me : ", me);
  useEffect(() => {
    if (!me) {
      navigate("/admin");
    }
  }, [me]);
  return (
    <>
      <AdminSubHeader data={"관리자 페이지"} />
      <div className="adminMain">
        <p
          onClick={() => {
            navigate("/adminLists", { state: { me } });
          }}
        >
          상품 목록
        </p>
        {/* <p
          onClick={() => {
            navigate("/adminPopup", { state: { me } });
          }}
        >
          팝업 창 관리
        </p> */}
      </div>
    </>
  );
};

export default AdminMain;
