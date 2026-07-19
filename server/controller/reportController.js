const reportService = require("../services/reportService");

const getDashboardReport = async (req, res) => {

    try {

        const report = await reportService.getDashboardReport();

        return res.status(200).json({

            success: true,

            message: "Dashboard report retrieved successfully.",

            data: report

        });

    } catch (error) {

        console.error("Dashboard Report Error:", error);

        return res.status(500).json({

            success: false,

            message: "Failed to retrieve dashboard report."

        });

    }

};
const getPackageReport = async (req, res) => {

    try {

        const report =
            await reportService.getPackageReport();

        return res.status(200).json({

            success: true,

            message: "Package report retrieved successfully.",

            data: report

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Failed to retrieve package report."

        });

    }

};
module.exports = { getDashboardReport, getPackageReport};