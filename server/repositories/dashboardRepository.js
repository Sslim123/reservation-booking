const supabase = require("../config/supabase");

const getRoomStatuses = async () => {

    const { data, error } = await supabase
        .from("rooms")
        .select(`
            id,
            bookings(
                status
            )
        `);

    if (error) throw error;

    return data;

};

const getTodaysArrivals = async () => {

    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
        .from("bookings")
        .select("id")
        .eq("check_in", today)
        .in("status", [
            "CONFIRMED",
            "CHECKED_IN"
        ]);

    if (error) throw error;

    return data;

};

const getTodaysDepartures = async () => {

    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
        .from("bookings")
        .select("id")
        .eq("check_out", today)
        .eq("status", "CHECKED_IN");

    if (error) throw error;

    return data;

};

const getPendingPayments = async () => {

    const { data, error } = await supabase
        .from("bookings")
        .select(`
            id,
            total_amount,
            amount_paid
        `)
        .neq("payment_status", "PAID");

    if (error) throw error;

    return data;

};

const getTodaysRevenue = async () => {

    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
        .from("payments")
        .select("amount")
        .gte("paid_at", `${today}T00:00:00`)
        .lt("paid_at", `${today}T23:59:59`);

    if (error) throw error;

    return data;

};
const getRecentBookings = async () => {

    const { data, error } = await supabase

        .from("bookings")

        .select(`
            id,
    booking_reference,
    first_name,
    last_name,
    status,
    created_at,

    rooms(
        room_number
    ),

    packages(
        name_en,
        name_ar
    )
        `)

        .order("created_at", {

            ascending: false

        })

        .limit(10);

    if (error) throw error;

    return data;

};
module.exports = {

    getRoomStatuses,

    getTodaysArrivals,

    getTodaysDepartures,

    getPendingPayments,

    getTodaysRevenue,
    getRecentBookings
};