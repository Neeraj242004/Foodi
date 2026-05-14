const Order = require("../models/Order");

const createOrder = async (req, res) => {

  const { customerName, items } = req.body;

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const order = await Order.create({
    customerName,
    items,
    totalAmount,
  });

  res.json(order);
};

module.exports = {
  createOrder,
};