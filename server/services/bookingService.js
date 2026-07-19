const bookingRepository = require("../repositories/bookingRepository");
const emailService = require("./emailService");
const bookingConfirmation = require("../template/bookingConfirmation");
const generateBookingReference = require("../utils/generateBookingReference");

const createBooking = async (bookingData) => {

    const {

        first_name,

        last_name,

        email,

        phone,

        adults,

        children,

        rooms_requested,

        check_in,

        check_out,

        package_id,

        room_id,

        special_requests,

        payment_method,

        payment_notes

    } = bookingData;
    const existingBooking = await bookingRepository.checkRoomAvailability(
        room_id,
        check_in,
        check_out
    );

    if (existingBooking) {

        throw new Error(
            "Sorry, this room has just been reserved. Please choose another room."
        );

    }


    const packageData = await bookingRepository.getPackageById(package_id);

    if (!packageData) {
        throw new Error("Selected package not found.");

    }

    const nights = Math.ceil((new Date(check_out) - new Date(check_in)) / (1000 * 60 * 60 * 24));

    const totalAmount = nights * rooms_requested * Number(packageData.price_per_night);

    const bookingReference = generateBookingReference();

    const booking = await bookingRepository.createBooking({

        booking_reference: bookingReference,
        first_name,
        last_name,
        email,
        phone,
        adults,
        children,
        rooms_requested,
        check_in,
        check_out,
        room_id,
        package_id,
        special_requests,
        payment_method,
        payment_status: "PENDING",
        total_amount: totalAmount,
        amount_paid: 0,
        status: "CONFIRMED"
    });


    const reservation = await bookingRepository.getReservation(hotel_id, booking.id);


    try {

        await emailService.sendEmail({

            to: reservation.email,              
              subject: `Booking Confirmation - ${reservation.booking_reference}`,
              bookingReference: reservation.booking_reference,

            html: bookingConfirmation(reservation)

        });

    }

    catch (error) {

        console.error("Email Error:", error.message);

    }

    return reservation;

};

module.exports = {

    createBooking

};