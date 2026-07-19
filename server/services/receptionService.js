const receptionRepository = require("../repositories/receptionRepository");
const emailService = require('./emailService');
const bookingCancelled = require('../template/bookingCancelled')
const getReservations = async () => {

    const reservations =
        await receptionRepository.getReservations();

    return reservations.map(reservation => {

        const checkIn = new Date(reservation.check_in);

        const checkOut = new Date(reservation.check_out);

        const nights = Math.ceil(

            (checkOut - checkIn) /

            (1000 * 60 * 60 * 24)

        );

        return {

            ...reservation,

            nights

        };

    });

};

const getTodaysArrivals = async () => {

    return await receptionRepository.getTodaysArrivals();

};

const checkInGuest = async (bookingId) => {

    const booking =
        await receptionRepository.findBooking(bookingId);

    if (!booking) {

        throw new Error("Reservation not found.");

    }

    if (booking.status !== "CONFIRMED") {

        throw new Error("Only confirmed reservations can be checked in.");

    }

    await receptionRepository.updateBookingStatus(

        bookingId,

        "CHECKED_IN"

    );

    await receptionRepository.updateRoomStatus(

        booking.room_id,

        "OCCUPIED"

    );

};

const checkOutGuest = async (bookingId) => {

    const booking =
        await receptionRepository.findBooking(bookingId);

    if (!booking) {

        throw new Error("Reservation not found.");

    }

    if (booking.status !== "CHECKED_IN") {

        throw new Error("Guest is not checked in.");

    }

    await receptionRepository.updateBookingStatus(

        bookingId,

        "CHECKED_OUT"

    );

    await receptionRepository.updateRoomStatus(

        booking.room_id,

        "AVAILABLE"

    );

};

const cancelReservation = async (bookingId, reason) => {

    const booking = await receptionRepository.findBooking(bookingId);
    if (!booking) {
        throw new Error("Reservation not found.");
    }
    if (booking.status !== "CONFIRMED") {
        throw new Error("Only confirmed reservations can be cancelled.");
    }
    await receptionRepository.cancelBooking(       bookingId,        reason    );
    const reservation = await receptionRepository.getReservationForEmail(bookingId);
    try {
        await emailService.sendEmail({
            to: reservation.email,
            subject: `Reservation Cancelled - ${reservation.booking_reference}`,
            html: bookingCancelled(reservation)
        })
    }
    catch (err) { console.error(err); }

};

module.exports = { getReservations, getTodaysArrivals, checkInGuest, checkOutGuest, cancelReservation };