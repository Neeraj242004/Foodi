const Reservation = require("../models/rservationrvation");

const createReservation = async (req, res) => {
  const reservation = await Reservation.create(req.body);

  res.json(reservation);
};

const getReservations = async (req, res) => {
  const reservations = await Reservation.find();

  res.json(reservations);
};

module.exports = {
  createReservation,
  getReservations,
};