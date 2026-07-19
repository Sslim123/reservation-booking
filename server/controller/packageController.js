const supabase = require("../config/supabase");

const getPackages = async (req, res) => {

    try {

        const { data, error } = await supabase
            .from("packages")
            .select(`
        id,
        code,
        name_en,
        name_ar,
        description_en,
        description_ar,
        price_per_night
    `)
            .eq("is_active", true)
            .order("price_per_night");

        if (error) throw error;

        return res.status(200).json({

            success: true,

            packages: data

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Unable to load packages."

        });

    }

};
module.exports = {getPackages};