const express = require("express");
const multer = require("multer");
const router = express.Router();
const { Review } = require("../models");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");

router.post("/load", async (req, res, next) => {
  try {
    const allReview = await Review.findAll({
      where: { user_id: req.body.userId, review_comment: null },
    });
    res.status(200).json(allReview);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/loadAll", async (req, res, next) => {
  try {
    const totalReviews = await Review.findAll({});
    res.status(200).json(totalReviews);
  } catch (e) {
    console.error(e);
    next(error);
  }
});

router.post("/loadProduct", async (req, res, next) => {
  try {
    const productCode = req.body.productCode;
    console.log("productId : ", productCode);
    const productReviews = await Review.findAll({
      where: { product_code: productCode },
    });
    res.status(200).json(productReviews);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/reviewImage");
  },
  filename: function (req, file, cb) {
    const originalName = path.basename(
      file.originalname,
      path.extname(file.originalname)
    ); // 파일명(확장자 제외)
    const extension = path.extname(file.originalname); // 파일 확장자
    const timestamp = dayjs().format("YYMMDD_HHmmss"); // 날짜와 시간 포맷팅
    const newFileName = `${originalName}_${timestamp}${extension}`; // 새 파일명 생성
    cb(null, decodeURIComponent(newFileName));
  },
});

const upload = multer({ storage: storage });
router.post("/uploadFiles", upload.single("file"), async (req, res, next) => {
  try {
    const { filename } = req.file;
    // const decodeFileName = decodeURIComponent(file_name);

    res.status(201).json({ filename });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/upload", async (req, res, next) => {
  try {
    const { review_content, starPoint, reviewImages, id } = req.body;

    const updateData = {
      review_comment: review_content,
      star_point: starPoint,
    };

    // 이미지 필드 업데이트
    if (reviewImages.length > 0) updateData.review_imgUrl1 = reviewImages[0];
    if (reviewImages.length > 1) updateData.review_imgUrl2 = reviewImages[1];
    if (reviewImages.length > 2) updateData.review_imgUrl3 = reviewImages[2];

    await Review.update(updateData, {
      where: { review_code: id },
    });

    res.status(200).send("Review updated successfully");
  } catch (error) {
    console.error(error);
    next(error); // 에러 처리 미들웨어로 전달
  }
});

module.exports = router;
