const express = require("express");
const multer = require("multer");
const router = express.Router();
const { Review } = require("../models");
const fs = require("fs");
const path = require("path");

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/bannerImage");
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    cb(null, decodeURIComponent(originalName));
  },
});

const upload = multer({ storage: storage });
router.post("/uploadFiles", upload.single("file"), async (req, res, next) => {
  try {
    const { originalname: file_name } = req.file;
    const decodeFileName = decodeURIComponent(file_name);

    res.status(201).send(`${decodeFileName} 등록 완료`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/upload", async (req, res, next) => {
  try {
  } catch (error) {
    console(error);
    next(error);
  }
});

module.exports = router;
