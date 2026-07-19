const supabase = require("../config/supabase");

const getPendingBookings = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("bookings")
            .select("*")
            .eq("status", "PENDING")
            .order("created_at", {
                ascending: true
            });
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        console.log("\n==========");
        console.log("Pending Bookings");
        console.table(data);
        console.log("==========\n");
        return res.json({
            success: true,
            total: data.length,
            bookings: data
        });
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
}
module.exports = {getPendingBookings};