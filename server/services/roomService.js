const roomRepository = require("../repositories/roomRepository");
const getRooms = async () => {
    return await roomRepository.getAllRooms();
};

const getStatistics = async () => {

    const rooms = await roomRepository.getRoomStatistics();

    return {

        total: rooms.length,

        available: rooms.filter(
            room => room.current_status === "AVAILABLE"
        ).length,

        reserved: rooms.filter(
            room => room.current_status === "RESERVED"
        ).length,

        occupied: rooms.filter(
            room => room.current_status === "OCCUPIED"
        ).length,

        cleaning: rooms.filter(
            room => room.room_status === "CLEANING"
        ).length,

        out_of_service: rooms.filter(
            room => room.room_status === "OUT_OF_SERVICE"
        ).length

    };

};

const getRoom = async (id) => {
    return await roomRepository.getRoomById(id);
};

const getCurrentReservation = async (roomId) => {
    return await roomRepository.getCurrentReservation(roomId);
};

module.exports = {
    getRooms,
    getStatistics,
    getRoom,
    getCurrentReservation
};

// const getRooms = async () => {
//     return await roomRepository.getAllRooms();
// };
// const getStatistics = async () => {

//     const rooms = await roomRepository.getRoomStatistics();

//     return {

//         total: rooms.length,

//         available: rooms.filter(r => r.status === "AVAILABLE").length,

//         reserved: rooms.filter(r => r.status === "RESERVED").length,

//         occupied: rooms.filter(r => r.status === "OCCUPIED").length,

//         cleaning: rooms.filter(r => r.status === "CLEANING").length,

//         out_of_service: rooms.filter(

//             r => r.status === "OUT_OF_SERVICE"

//         ).length

//     };

// };
// const getRoom = async(id)=>{

//     return await roomRepository.getRoomById(id);

// };
// const getCurrentReservation = async(roomId)=>{

//     return await roomRepository.getCurrentReservation(roomId);

// };
// module.exports={

//     getRooms,

//     getStatistics,

//     getRoom,
//     getCurrentReservation

// };