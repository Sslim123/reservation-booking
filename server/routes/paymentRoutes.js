const router = require("express").Router();

const paymentController =require("../controller/paymentController");

router.post("/payments",paymentController.receivePayment);

router.get("/payments",paymentController.getPayments);

module.exports = router;