const express = require("express");

const router = express.Router();

const customerController = require("../controller/customerController");

// Search reservation
router.post("/customer/reservation",customerController.findReservation);

router.put( "/customer/:bookingReference/cancel", customerController.cancelReservation);

module.exports = router;