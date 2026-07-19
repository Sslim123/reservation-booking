const customerService = require("../services/customerService");

const findReservation = async (req, res) => {

    try {

        const { booking_reference, email } = req.body;

        if (!booking_reference || !email) {
            return res.status(400).json({
                success: false,
                message: "Booking reference and email are required."
            });
        }

        const reservation = await customerService.findReservation(booking_reference, email);

        return res.status(200).json({ success: true, reservation });

    }

    catch (error) {
        console.error(error);
        return res.status(404).json({ success: false, message: error.message });
    }
};

const cancelReservation = async (req, res) => {

    try {

        const { bookingReference } = req.params;

        const reason = req.body?.reason || "Guest requested cancellation";

        const result = await customerService.cancelReservation(bookingReference, reason);
        return res.status(200).json({ success: true, message: result.message, reason: reason });
    }

    catch (error) {

        console.error(error);

        return res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { findReservation, cancelReservation };