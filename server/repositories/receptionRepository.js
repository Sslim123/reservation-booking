const supabase  = require("../config/supabase");

const getReservations = async () => {
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
            payment_method,
    payment_status,
    total_amount,
    amount_paid,
            rooms (
                room_number
            ),

            packages (
                id,
                name_en,
                name_ar,
                price_per_night
            )
        `)

        .order("check_in", { ascending: true });

    if (error) throw error;

    return data;
};

const getTodaysArrivals = async () => {

    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase

        .from("bookings")

        .select(`
            id,
            booking_reference,
            first_name,
            last_name,
            phone,
            email,

            rooms (
                room_number
            ),

            packages (
                name_en
            )
        `)

        .eq("status", "CONFIRMED")

        .eq("check_in", today);

    if (error) throw error;

    return data;
};

const findBooking = async (bookingId) => {

    const { data, error } = await supabase

        .from("bookings")

        .select("id, room_id, status")

        .eq("id", bookingId)

        .single();

    if (error) throw error;

    return data;
};
const cancelBooking = async(bookingId,reason)=>{

const {error}=await supabase
.from("bookings")
.update({status:"CANCELLED",cancelled_by: "HOTEL",cancellation_reason :reason})
.eq("id",bookingId);
if(error)
throw error;
};
const getReservationForEmail = async(

bookingId

)=>{

const {data,error}=

await supabase

.from("bookings")

.select(`

booking_reference,

first_name,

last_name,

email,

check_in,

check_out,

cancellation_reason,
cancelled_by,
rooms(

room_number

),

packages(

name_en,

name_ar

)

`)

.eq("id",bookingId)

.single();

if(error)

throw error;

return data;

};
const updateBookingStatus = async (bookingId, status) => {

    const { error } = await supabase

        .from("bookings")

        .update({ status })

        .eq("id", bookingId);

    if (error) throw error;
};

const updateRoomStatus = async (roomId, status) => {

    const { error } = await supabase

        .from("rooms")

        .update({ status })

        .eq("id", roomId);

    if (error) throw error;
};

module.exports = { getReservations, getTodaysArrivals, findBooking,getReservationForEmail , cancelBooking,  updateBookingStatus,  updateRoomStatus};