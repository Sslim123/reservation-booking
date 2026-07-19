const SelectedRooms = ({availableRooms, isEnglish,bookingData,setBookingData}) => {
    return (
                <div className="mt-4">
                    <h5 className="fw-bold">
                        {isEnglish   ? "Choose Your Room"    : "اختر غرفتك"}
                    </h5>
                    <div className="row g-3 mt-2">
                        {availableRooms.map(room => (
                            <div
                                key={room.id}
                                className="col-md-3 col-sm-6"
                            >

                                <div
                                    className={`card h-100 shadow-sm cursor-pointer ${bookingData.room_id === room.id
                                            ? "border-warning border-3"
                                            : ""
                                        }`}
                                    onClick={() =>

                                        setBookingData(prev => ({
                                            ...prev,
                                            room_id: room.id,
                                          package_id: ""

                                        }))
                                    }
                                >
                                    <div className="card-body text-center">
                                        <h5>
                                            Room {room.room_number}
                                        </h5>
                                        <small className="text-success">
                                            Available
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
    )}
export default SelectedRooms;