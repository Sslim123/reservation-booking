const roomService=require("../services/roomService");

const getRooms=async(req,res)=>{

try{

const rooms=await roomService.getRooms();

return res.json({

success:true,

rooms

});

}

catch(error){

return res.status(500).json({

success:false,

message:error.message

});

}

};
const getStatistics=async(req,res)=>{

try{

const statistics=

await roomService.getStatistics();

return res.json({

success:true,

statistics

});

}

catch(error){

return res.status(500).json({

success:false,

message:error.message

});

}

};
const getRoom=async(req,res)=>{

try{

const room=

await roomService.getRoom(req.params.id);

return res.json({

success:true,

room

});

}

catch(error){

return res.status(500).json({

success:false,

message:error.message

});

}

};
const getCurrentReservation = async(req,res)=>{

try{

const reservation=

await roomService.getCurrentReservation(

req.params.id

);

return res.json({

success:true,

reservation

});

}

catch(error){

return res.status(500).json({

success:false,

message:error.message

});

}

};
module.exports={

getRooms,

getStatistics,

getRoom,
getCurrentReservation

};