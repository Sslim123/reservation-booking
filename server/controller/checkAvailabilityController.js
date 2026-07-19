const supabase = require("../config/supabase");

const checkAvailability = async (req, res) => {
    try {
        const { check_in, check_out } = req.body;

        if (!check_in || !check_out) {
            return res.status(400).json({
                success: false,
                message: "Check-in and check-out dates are required."
            });
        }

        if (new Date(check_in) >= new Date(check_out)) {
            return res.status(400).json({
                success: false,
                message: "Check-out date must be after check-in date."
            });
        }

        const { data: bookedRooms, error: bookingError } = await supabase
            .from("bookings")
            .select("room_id")
            .in("status", ["PENDING", "CONFIRMED"])
            .lt("check_in", check_out)
            .gt("check_out", check_in);

        if (bookingError) {
            throw bookingError;
        }

        const bookedRoomIds = bookedRooms
            .map(room => room.room_id)
            .filter(Boolean);

        let roomsQuery = supabase
            .from("rooms")
            .select(`
                id,
                room_number,
                status
            `)
            .eq("status", "AVAILABLE")
            .order("room_number", { ascending: true });

        if (bookedRoomIds.length > 0) {
            roomsQuery = roomsQuery.not("id", "in", `(${bookedRoomIds.join(",")})`);
        }
        const { data: availableRooms, error: roomError } = await roomsQuery;
        if (roomError) {
            throw roomError;
        }

        return res.status(200).json({
            success: true,
            available: availableRooms.length > 0,
            rooms: availableRooms
        });
    } catch (error) {
        console.error("Availability Error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to check room availability.",
            error: error.message
        });
    }
};
module.exports = {checkAvailability};