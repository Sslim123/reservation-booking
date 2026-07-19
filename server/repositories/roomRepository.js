const supabase = require("../config/supabase");

const getAllRooms = async () => {

    const { data, error } = await supabase
        .from("rooms")
        .select(`
            *,
            bookings(
                id,
                status,
                check_in,
                check_out
            )
        `)
        .order("room_number");

    if (error) throw error;

    return data.map(room => {

        const activeBooking = room.bookings?.find(booking =>
            ["CONFIRMED", "CHECKED_IN"].includes(booking.status)
        );

        let current_status;

        if (room.status === "MAINTENANCE") {

            current_status = "MAINTENANCE";

        } else if (room.status === "OUT_OF_SERVICE") {

            current_status = "OUT_OF_SERVICE";

        } else if (activeBooking?.status === "CHECKED_IN") {

            current_status = "OCCUPIED";

        } else if (activeBooking?.status === "CONFIRMED") {

            current_status = "RESERVED";

        } else {

            current_status = "AVAILABLE";

        }

        return {

            ...room,

            booking_status: activeBooking?.status || null,

            current_status

        };

    });
};
const getRoomStatistics = async () => {

    const rooms = await getAllRooms();

    return rooms.map(room => ({
        status: room.current_status
    }));

};

const getRoomById = async (id) => {

    const { data, error } = await supabase

        .from("rooms")

        .select("*")

        .eq("id", id)

        .single();

    if (error) throw error;

    return data;

};
const getCurrentReservation = async (roomId) => {

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
            check_in,
            check_out,
            special_requests,
            status,

            packages(
                id,
                name_en,
                name_ar,
                price_per_night
            )
        `)

        .eq("room_id", roomId)

        .in("status", [
            "CONFIRMED",
            "CHECKED_IN"
        ])

        .order("check_in", {
            ascending: false
        })

        .limit(1)

        .maybeSingle();

    if (error) {

        throw error;

    }

    return data;

};
module.exports = {

    getAllRooms,

    getRoomStatistics,

    getRoomById,
    getCurrentReservation

};