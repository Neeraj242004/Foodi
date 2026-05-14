const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  customerName: {
    type: String,
    required: true,
  },

  items: [
    {
      name: String,
      price: Number,
      image: String,
    }
  ],

  totalAmount: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }

});

module.exports = mongoose.model("Order", orderSchema);