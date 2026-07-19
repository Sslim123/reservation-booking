const OverviewCards = ({ dashboard, language }) => {

    const text = {

        en: {

            totalReservations: "Reservations",
            totalGuests: "Guests",
            occupancyRate: "Occupancy",
            availableRooms: "Available Rooms"

        },

        ar: {

            totalReservations: "الحجوزات",
            totalGuests: "النزلاء",
            occupancyRate: "نسبة الإشغال",
            availableRooms: "الغرف المتاحة"

        }

    };

    const t = text[language] || text.en;

    const cards = [

        {
            title: t.totalReservations,
            value: dashboard.totalReservations,
            color: "primary"
        },

        {
            title: t.totalGuests,
            value: dashboard.totalGuests,
            color: "success"
        },

        {
            title: t.occupancyRate,
            value: `${dashboard.occupancyRate}%`,
            color: "warning"
        },

        {
            title: t.availableRooms,
            value: dashboard.availableRooms,
            color: "dark"
        }

    ];

    return (

        <div className="row mb-4">

            {

                cards.map((card, index) => (

                    <div
                        key={index}
                        className="col-xl-3 col-lg-6 col-md-6 mb-3"
                    >

                        <div className="card shadow-sm border-0 h-100">

                            <div className="card-body text-center">

                                <h2
                                    className={`fw-bold text-${card.color}`}
                                >

                                    {card.value}

                                </h2>

                                <div className="text-muted">

                                    {card.title}

                                </div>

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

};

export default OverviewCards;