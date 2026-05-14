const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  date: String,
  time: String,
  partySize: String,
  tableArea: String,
  fullName: String,
  phone: String,
  email: String,
  specialRequest: String,
});

module.exports = mongoose.model("reservation",reservationSchema);