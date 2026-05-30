const express = require("express");

const router = express.Router();

const {
  createReservation,
  getReservations,
} = require("../controllers/ReservationController");

router.post("/", createReservation);

router.get("/", getReservations);

module.exports = router;