const bookingCancelled =   require("../template/bookingCancelled");
const emailService = require("../services/emailService");

const receptionService = require("../services/receptionService");

const getReservations = async (req, res) => {

    try {
     
      const reservation=   await receptionService.getReservations()  ; 
        return res.json({
            success: true,
            reservation
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getTodaysArrivals = async (req, res) => {

    try {
      const arrival =  await receptionService.getTodaysArrivals()
            return res.status(400).json({
                success: false,
                message: error.message
            });
        return res.json({
            success: true,
            arrival

        });

    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
const checkInGuest = async (req, res) => {

    try {

        await receptionService.checkInGuest(req.params.id);
        return res.json({
            success: true,
            message: "Guest checked in successfully."
        });
    }

    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const checkOutGuest = async (req, res) => {

    try {
             await receptionService.checkOutGuest(req.params.id);
        return res.json({
            success: true,
            message: "Guest checked out successfully."
        });

    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message

        });

    }

};

const cancelReservation = async (req, res) => {

    try {
        const reason = req.body?.reason || "Cancelled by hotel";

        await receptionService.cancelReservation(req.params.id, reason);
        return res.json({
            success: true,
            message: "Reservation cancelled successfully."
        });
    }
    catch (error) {

    console.error("Cancel Reservation Error:");
    console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {getReservations, getTodaysArrivals, checkInGuest,checkOutGuest ,cancelReservation }