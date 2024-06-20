import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MypageS1 from "./mypageS1";
import MypageS2 from "./mypageS2";
import MypageS3 from "./mypageS3";
import MypageS4 from "./mypageS4";
const MypageContents = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  // const { carts } = useSelector((state) => state.cart);
  // const [uniquecarts, setUniquecarts] = useState([]);

  const userId = me && me.id;

  // useEffect(() => {
  //   const removeDuplicatesById = (lists) => {
  //     if (!lists || !Array.isArray(lists)) {
  //       return [];
  //     }
  //     const uniqueLists = [];
  //     const existingIds = [];

  //     for (const list of lists) {
  //       if (list && list.id && !existingIds.includes(list.id)) {
  //         uniqueLists.push(list);
  //         existingIds.push(list.id);
  //       }
  //     }

  //     return uniqueLists;
  //   };

  //   setUniquecarts(removeDuplicatesById(carts));
  // }, [carts]);
  return (
    <>
      <MypageS1 />
      <MypageS2 userId={userId} />
      {/* <MypageS3 carts = {uniquecarts} /> */}
      <MypageS4 />
    </>
  );
};

export default MypageContents;
