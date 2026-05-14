const express = require("express");
const router = express.Router();

const {
  createOrder,
} = require("../controllers/orderController");

const Order = require("../models/Order");

router.post("/", createOrder);

router.get("/", async (req, res) => {

  const orders = await Order.find();

  res.json(orders);

});

module.exports = router;