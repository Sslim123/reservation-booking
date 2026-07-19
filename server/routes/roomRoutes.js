const router=require("express").Router();
const{getRooms,getStatistics,getRoom, getCurrentReservation}=require("../controller/roomController");

router.get("/rooms",getRooms);
router.get("/rooms/statistics",getStatistics);
router.get("/rooms/:id",getRoom);
router.get("/rooms/:id/reservation", getCurrentReservation);
module.exports=router;