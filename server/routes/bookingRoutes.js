const express = require("express");
const router = express.Router();

// const { getAvailableRooms } = require("../controller/availableRoomController");
// const { getPendingBookings } = require("../controller/pendingController");
// const { getReservations } = require("../controller/reservationController");

const { createBooking } = require("../controller/bookingController");
const { checkAvailability } = require("../controller/checkAvailabilityController");
const { getPackages } = require("../controller/packageController");
const validateBooking = require("../middleware/validateBooking");

router.post("/bookings", validateBooking, createBooking);
router.post("/bookings/check-availability", checkAvailability);
router.get("/packages", getPackages);

// router.get("/rooms/available", getAvailableRooms);
// router.get("/pending", getPendingBookings);
//  router.get("/reception/reservations", getReservations);

module.exports = router;