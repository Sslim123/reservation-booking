const reportRepository = require("../repositories/reportRepository");

const getDashboardReport = async () => {

    const { bookings, rooms } =
        await reportRepository.getDashboardData();

    const today = new Date().toISOString().split("T")[0];

    const totalReservations = bookings.length;

    const confirmedReservations = bookings.filter(

        booking => booking.status === "CONFIRMED"

    ).length;

    const checkedInReservations = bookings.filter(

        booking => booking.status === "CHECKED_IN"

    ).length;

    const checkedOutReservations = bookings.filter(

        booking => booking.status === "CHECKED_OUT"

    ).length;

    const cancelledReservations = bookings.filter(

        booking => booking.status === "CANCELLED"

    ).length;

    const todayArrivals = bookings.filter(

        booking => booking.check_in === today

    ).length;

    const todayDepartures = bookings.filter(

        booking => booking.check_out === today

    ).length;

    const totalGuests = bookings.reduce(

        (total, booking) =>

            total + booking.adults + booking.children,

        0

    );

    const totalRooms = rooms.length;

    const availableRooms = rooms.filter(

        room => room.status === "AVAILABLE"

    ).length;

    const reservedRooms = rooms.filter(

        room => room.status === "RESERVED"

    ).length;

    const occupiedRooms = rooms.filter(

        room => room.status === "OCCUPIED"

    ).length;

    const occupancyRate = totalRooms === 0

        ? 0

        : Math.round(

            ((reservedRooms + occupiedRooms) / totalRooms) * 100

        );

    return {

        totalReservations,

        confirmedReservations,

        checkedInReservations,

        checkedOutReservations,

        cancelledReservations,

        todayArrivals,

        todayDepartures,

        totalGuests,

        totalRooms,

        availableRooms,

        reservedRooms,

        occupiedRooms,

        occupancyRate

    };

};

const getPackageReport = async () => {

    const bookings =
        await reportRepository.getPackageStatistics();

    const packageMap = {};

    bookings.forEach(booking => {

        const pkg = booking.packages;

        if (!pkg) return;

        if (!packageMap[pkg.id]) {

            packageMap[pkg.id] = {

                id: pkg.id,

                code: pkg.code,

                name_en: pkg.name_en,

                name_ar: pkg.name_ar,

                bookings: 0

            };

        }

        packageMap[pkg.id].bookings++;

    });

    return Object.values(packageMap)

        .sort((a, b) => b.bookings - a.bookings);

};
// const getPackageReport = async () => {

//     const bookings =
//         await reportRepository.getPackageStatistics();

//     const packageMap = {};

//     bookings.forEach(booking => {

//         if(!booking.package)return;

    

//         if (!packageMap[pkg.id]) {

//             packageMap[pkg.id] = {

//                 id: pkg.id,

//                 code: pkg.code,

//                 name_en: pkg.name_en,

//                 name_ar: pkg.name_ar,

//                 bookings: 0

//             };

//         }

//         packageMap[pkg.id].bookings++;

//     });

//     return Object.values(packageMap)

//         .sort((a, b) => b.bookings - a.bookings);

// };
module.exports = {  getDashboardReport, getPackageReport };