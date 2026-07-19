const RoomSummary = ({ dashboard, isEnglish }) => {

    const rooms = [

        {

            title: isEnglish
                ? "Total Rooms"
                : "إجمالي الغرف",

            value: dashboard.totalRooms,

            color: "dark"

        },

        {

            title: isEnglish
                ? "Available"
                : "متاحة",

            value: dashboard.availableRooms,

            color: "success"

        },

        {

            title: isEnglish
                ? "Reserved"
                : "محجوزة",

            value: dashboard.reservedRooms,

            color: "warning"

        },

        {

            title: isEnglish
                ? "Occupied"
                : "مشغولة",

            value: dashboard.occupiedRooms,

            color: "danger"

        },

        {

            title: isEnglish
                ? "Occupancy Rate"
                : "نسبة الإشغال",

            value: `${dashboard.occupancyRate}%`,

            color: "primary"

        }

    ];

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-header bg-dark text-white fw-bold">

                {

                    isEnglish

                        ? "Room Summary"

                        : "ملخص الغرف"

                }

            </div>

            <div className="card-body">

                <div className="row">

                    {

                        rooms.map((room, index) => (

                            <div
                                key={index}
                                className="col-lg col-md-4 col-sm-6 mb-3"
                            >

                                <div className="card h-100">

                                    <div className="card-body text-center">

                                        <h3
                                            className={`fw-bold text-${room.color}`}
                                        >

                                            {room.value}

                                        </h3>

                                        <small className="text-muted">

                                            {room.title}

                                        </small>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    );

};

export default RoomSummary;