const supabase = require("../config/supabase");

const checkRoomAvailability = async (
    roomId,
    checkIn,
    checkOut
) => {

    const { data, error } = await supabase
        .from("bookings")
        .select("id")
        .eq("room_id", roomId)
        .eq("status", "CONFIRMED")
        .lt("check_in", checkOut)
        .gt("check_out", checkIn)
        .maybeSingle();

    if (error) throw error;

    return data;

};

const getPackageById = async (packageId) => {

    const { data, error } = await supabase
        .from("packages")
        .select(`
            id,
            name_en,
            name_ar,
            price_per_night
        `)
        .eq("id", packageId)
        .single();

    if (error) throw error;

    return data;

};

const createBooking = async (booking) => {

    const { data, error } = await supabase
        .from("bookings")
        .insert([booking])
        .select()
        .single();

    if (error) throw error;

    return data;

};

const getReservation = async (bookingId) => {

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
            payment_method,
            payment_status,
            total_amount,
            amount_paid,
            status,

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
        .eq("id", bookingId)
        .single();

    if (error) throw error;

    return data;

};

module.exports = {    checkRoomAvailability,   getPackageById,  createBooking, getReservation};