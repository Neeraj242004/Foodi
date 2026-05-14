const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  date: String,
  time: String,
  partySize: String,
  tableRef: String,
  fullName: String,
  Phone: String,
  email: String,
  specialRequest: String,
});

module.exports = mongoose.model("Reservation", reservationSchema);