const supabase = require("../config/supabase");

const createPayment = async (payment) => {

    const { data, error } = await supabase.from("payments").insert([payment]).select().single();
    if (error) throw error;
    return data;
};

const getBooking = async (bookingId) => {
    const { data, error } = await supabase
        .from("bookings")
        .select(`
            id,
            booking_reference,
            first_name,
            last_name,
            total_amount,
            payment_method,
            payment_status,
            amount_paid
            
        `)

        .eq("id", bookingId)

        .single();

    if (error) throw error;

    return data;

};
const updateBookingPayment = async (

    bookingId,

    payment

) => {

    const { error } = await supabase

        .from("bookings")

        .update({

            payment_status:

                payment.payment_status,

            payment_method:

                payment.payment_method,

            amount_paid:

                payment.amount_paid

        })

        .eq("id", bookingId);

    if (error) throw error;

};
const getPayments = async () => {
    const { data, error } = await supabase
        .from("payments").select(`
            *,
            bookings(
                booking_reference,
                first_name,
                last_name
            ),
            staff(
                first_name,
                last_name
            )
        `)

        .order("created_at", {

            ascending: false

        });

    if (error) throw error;

    return data;
};
module.exports = {   createPayment,   getBooking, updateBookingPayment, getPayments};