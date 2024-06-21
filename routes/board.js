const express = require("express");
const router = express.Router();
const { Board } = require("../models");

router.post("/add", async (req, res, next) => {
  try {
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
