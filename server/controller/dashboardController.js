const dashboardService = require("../services/dashboardService");

const getDashboard = async (req, res) => {

    try {

        const dashboard = await dashboardService.getDashboard();

        return res.json({

            success: true,

            dashboard

        });

    }

    catch (error) {

        console.error("Dashboard Error:", error);

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    getDashboard

};