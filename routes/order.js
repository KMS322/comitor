const express = require("express");
const router = express.Router();
const { OrderList } = require("../models");
const { OrderProduct } = require("../models");

router.post("/add", async (req, res, next) => {
  try {
    const { carts, deliveryInfo } = req.body.orderInfo;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const currentTime = `${year}${month}${day}-${hours}:${minutes}:${seconds}`;

    const order_code = `${currentTime}/${carts[0].user_id}`;
    await OrderList.create({
      order_id: 1,
      order_code: order_code,
      user_id: carts[0].user_id,
      order_name: deliveryInfo.name,
      order_phone: deliveryInfo.phone,
      order_address: deliveryInfo.address,
      order_request: deliveryInfo.request,
    });
    for (const cart of carts) {
      await OrderProduct.create({
        order_code: order_code,
        product_code: cart.product_code,
        product_cnt: cart.product_cnt,
      });
    }

    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/load", async (req, res, next) => {
  try {
    const allLists = await OrderList.findAll({});
    const allProducts = await OrderProduct.findAll({});

    const sendOrder = { allLists, allProducts };
    res.status(200).json(sendOrder);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
