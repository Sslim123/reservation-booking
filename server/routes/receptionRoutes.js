const express = require("express");
const router = express.Router();

const  {getReservations, getTodaysArrivals, checkInGuest,checkOutGuest,cancelReservation}  = require("../controller/receptionController");

 router.get("/reception/reservations", getReservations);
router.get("/reception/arrivals", getTodaysArrivals);
router.put("/reception/:id/check-in", checkInGuest);
router.put("/reception/:id/check-out", checkOutGuest);
router.put("/reception/:id/cancel", cancelReservation);

module.exports = router;