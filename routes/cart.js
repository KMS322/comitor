const express = require("express");
const router = express.Router();
const { Cart } = require("../models");

router.post("/add", async (req, res, next) => {
  try {
    console.log("req.body : ", req.body);
    const addCart = await Cart.create({
      product_code: req.body.code,
      user_id: req.body.user,
      product_cnt: req.body.selectedCnt,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/load", async (req, res, next) => {
  try {
    console.log("req.body : ", req.body);
    const loadedCart = await Cart.findAll({
      user_id: req.body.user,
    });
    res.status(200).json(loadedCart);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
