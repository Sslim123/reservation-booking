const supabase = require("../config/supabase");

const findReservation = async (bookingReference, email) => {

    const { data, error } = await supabase

        .from("bookings")

        .select(`
            id,
            booking_reference,
            first_name,
            last_name,
            email,
            phone,
            adults,
            children,
            rooms_requested,
            check_in,
            check_out,
            special_requests,
            status,
            cancellation_reason,
            cancelled_by,

            rooms(
                room_number
            ),

            packages(
                id,
                name_en,
                name_ar,
                price_per_night
            )
        `)

        .eq("booking_reference", bookingReference)

        .eq("email", email)

        .maybeSingle();

    if (error) throw error;

    return data;
};


const cancelReservation = async (
    bookingReference,
    reason
) => {

    const { error } = await supabase

        .from("bookings")

        .update({

            status: "CANCELLED",

            cancellation_reason: reason,

            cancelled_by: "CUSTOMER"

        })

        .eq("booking_reference", bookingReference);

    if (error) throw error;
};

const getReservationDetails = async (bookingReference) => {

    const { data, error } = await supabase

        .from("bookings")

        .select(`
            id,
            booking_reference,
            first_name,
            last_name,
            email,
            phone,
            adults,
            children,
            rooms_requested,
            check_in,
            check_out,
            special_requests,
            status,
            cancellation_reason,
            cancelled_by,

            rooms(
                room_number
            ),

            packages(
                id,
                name_en,
                name_ar,
                price_per_night
            )
        `)

        .eq("booking_reference", bookingReference)

        .single();

    if (error) throw error;

    return data;
};

const getReservationForEmail = async (bookingReference) => {

    const { data, error } = await supabase

        .from("bookings")

        .select(`
            booking_reference,

            first_name,

            last_name,

            email,

            check_in,

            check_out,

            cancellation_reason,

            rooms(
                room_number
            ),

            packages(
                name_en,
                name_ar
            )
        `)

        .eq("booking_reference", bookingReference)

        .single();

    if (error) throw error;

    return data;
};

module.exports = { findReservation,  cancelReservation,  getReservationDetails , getReservationForEmail};