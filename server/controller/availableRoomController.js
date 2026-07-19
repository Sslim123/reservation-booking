const supabase = require("../config/supabase");

const getAvailableRooms = async (req, res) => {

    try {

        const { data, error } = await supabase
            .from("rooms")
            .select("*")
            .eq("status", "AVAILABLE")
            .order("room_number");
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
        return res.json({
            success: true, total: data.length, rooms: data.map(room => ({
                id: room.id,
                room_number: room.room_number
            }))
        });

    }

    catch (err) {

        console.log(err);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }


};

module.exports = {getAvailableRooms}