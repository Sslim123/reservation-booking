const supabase = require("../config/supabase");

const getDashboardData = async () => {

    const { data: bookings, error: bookingsError } = await supabase

        .from("bookings")

        .select(`
            id,
            status,
            check_in,
            check_out,
            adults,
            children,
            package_id,

            packages (
                id,
                code,
                name_en,
                name_ar
            )
        `);

    if (bookingsError) throw bookingsError;

    const { data: rooms, error: roomsError } = await supabase

        .from("rooms")

        .select(`
            id,
            status
        `);

    if (roomsError) throw roomsError;

    return {
        bookings,
        rooms
    };

};
const getPackageStatistics = async () => {

    const { data, error } = await supabase

        .from("bookings")

        .select(`
            package_id,

            packages (
                id,
                code,
                name_en,
                name_ar
            )
        `);

    if (error) throw error;

    return data;

};
module.exports = {   getDashboardData, getPackageStatistics };