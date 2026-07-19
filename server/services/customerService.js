const customerRepository = require("../repositories/customerRepository");
const emailService = require("./emailService");
const bookingCancelled = require("../template/bookingCancelled");


const findReservation = async (

    bookingReference,

    email

) => {

    const reservation =

        await customerRepository.findReservation(

            bookingReference,

            email

        );

    if (!reservation) {

        throw new Error(

            "Reservation not found."

        );

    }

    return reservation;

};

const cancelReservation = async (

    bookingReference,

    reason

) => {

    const reservation =

        await customerRepository.getReservationDetails(

            bookingReference

        );

    if (!reservation) {

        throw new Error(

            "Reservation not found."

        );

    }

    // Already cancelled

    if (

        reservation.status === "CANCELLED"

    ) {

        throw new Error(

            "Reservation has already been cancelled."

        );

    }

    // Guest already arrived

    if (

        reservation.status === "CHECKED_IN"

    ) {

        throw new Error(

            "Checked-in reservations cannot be cancelled."

        );

    }

    // Guest already left

    if (

        reservation.status === "CHECKED_OUT"

    ) {

        throw new Error(

            "Checked-out reservations cannot be cancelled."

        );

    }

    await customerRepository.cancelReservation(

        bookingReference,

        reason

    );

    const emailReservation =

        await customerRepository.getReservationForEmail(

            bookingReference

        );

    try {

        await emailService.sendEmail({

            to: emailReservation.email,

            subject:

                `Reservation Cancelled - ${emailReservation.booking_reference}`,

            html:

                bookingCancelled(

                    emailReservation

                )

        });

        console.log(

            "Customer cancellation email sent."

        );

    }

    catch (emailError) {

        console.error(

            emailError

        );

    }

    return {

        success: true,

        message:

            "Reservation cancelled successfully."

    };

};

module.exports = { findReservation, cancelReservation};