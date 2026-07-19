const dashboardRepository = require("../repositories/dashboardRepository");

const getDashboard = async () => {

    const rooms =
        await dashboardRepository.getRoomStatuses();

    const arrivals =
        await dashboardRepository.getTodaysArrivals();

    const departures =
        await dashboardRepository.getTodaysDepartures();

    const pendingPayments =
        await dashboardRepository.getPendingPayments();

    const revenue =
        await dashboardRepository.getTodaysRevenue();

    const recentBookings =
        await dashboardRepository.getRecentBookings();

    const roomStatistics = rooms.reduce(

        (summary, room) => {

            const activeBooking = room.bookings?.find(

                booking =>

                    booking.status === "CONFIRMED" ||

                    booking.status === "CHECKED_IN"

            );

            if (!activeBooking) {

                summary.available++;

            }

            else if (activeBooking.status === "CONFIRMED") {

                summary.reserved++;

            }

            else if (activeBooking.status === "CHECKED_IN") {

                summary.occupied++;

            }

            return summary;

        },

        {

            total: rooms.length,

            available: 0,

            reserved: 0,

            occupied: 0

        }

    );

    const revenueToday = revenue.reduce(

        (total, payment) =>

            total + Number(payment.amount),

        0

    );

    return {

        totalRooms: roomStatistics.total,

        availableRooms: roomStatistics.available,

        reservedRooms: roomStatistics.reserved,

        occupiedRooms: roomStatistics.occupied,

        arrivalsToday: arrivals.length,

        departuresToday: departures.length,

        pendingPayments: pendingPayments.length,

        revenueToday,

        recentBookings

    };

};

module.exports = {

    getDashboard

};