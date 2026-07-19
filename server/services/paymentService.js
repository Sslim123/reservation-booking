// const paymentRepository = require("../repositories/paymentRepository");

// const receivePayment = async (paymentData) => {

//     const booking = await paymentRepository.getBooking(

//         paymentData.booking_id

//     );

//     if (!booking) {

//         throw new Error("Booking not found.");

//     }

//     if (booking.payment_completed) {

//         throw new Error("Payment already received.");

//     }

//     const payment = await paymentRepository.createPayment({

//         booking_id: paymentData.booking_id,

//         amount: paymentData.amount,

//         currency: "GBP",

//         payment_method: paymentData.payment_method,

//         payment_status: "PAID",



//         notes: paymentData.notes,

//         received_by: paymentData.received_by,

//         paid_at: new Date()

//     });

//     await paymentRepository.markBookingPaid(

//         paymentData.booking_id

//     );

//     return payment;

// };

// const getPayments = async () => {

//     return await paymentRepository.getPayments();

// };

// module.exports = {

//     receivePayment,

//     getPayments

// };
const paymentRepository = require("../repositories/paymentRepository");

const receivePayment = async (paymentData) => {

    const booking = await paymentRepository.getBooking(paymentData.booking_id);
    if (!booking) {
        throw new Error("Booking not found.");
    }
    if (booking.payment_status === "PAID") {
        throw new Error("This reservation has already been paid.");
    }
    console.log("Payment Data:", paymentData);
    console.log("Booking:", booking);
    const amount = Number(paymentData.amount);
    if (amount <= 0) {
        throw new Error("Invalid payment amount.");
    }

    if (amount > booking.total_amount) {
        throw new Error("Payment cannot exceed the booking total.");
    }
    console.log(paymentData);
    console.log(paymentData);
    const payment = await paymentRepository.createPayment({
        booking_id: booking.id,
        amount: paymentData.amount,
        currency: "GBP",
        payment_method: paymentData.payment_method,
        payment_status: "PAID",
        reference_number: paymentData.reference_number || null,
        notes: paymentData.notes || null,
        received_by: paymentData.received_by || null,
        paid_at: new Date()
    });

    await paymentRepository.updateBookingPayment(

        booking.id,

        {

            payment_status: "PAID",

            payment_method: paymentData.payment_method,

            amount_paid: paymentData.amount

        }

    );
    return payment;
};

const getPayments = async () => {
    return await paymentRepository.getPayments();
};

module.exports = { receivePayment, getPayments };