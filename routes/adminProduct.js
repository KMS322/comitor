const express = require("express");
const { Product } = require("../models");
const router = express.Router();

router.get("/upload", async (req, res, next) => {
  try {
    console.log("req.body : ", req.body);
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
