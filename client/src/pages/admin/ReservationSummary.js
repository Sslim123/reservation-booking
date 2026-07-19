const ReservationSummary = ({ dashboard, isEnglish }) => {

    const cards = [

        {

            title: isEnglish
                ? "Confirmed"
                : "المؤكدة",

            value: dashboard.confirmedReservations,

            color: "success"

        },

        {

            title: isEnglish
                ? "Checked In"
                : "تم تسجيل الوصول",

            value: dashboard.checkedInReservations,

            color: "primary"

        },

        {

            title: isEnglish
                ? "Checked Out"
                : "تم تسجيل المغادرة",

            value: dashboard.checkedOutReservations,

            color: "secondary"

        },

        {

            title: isEnglish
                ? "Cancelled"
                : "الملغاة",

            value: dashboard.cancelledReservations,

            color: "danger"

        },

        {

            title: isEnglish
                ? "Today's Arrivals"
                : "وصول اليوم",

            value: dashboard.todayArrivals,

            color: "info"

        },

        {

            title: isEnglish
                ? "Today's Departures"
                : "مغادرة اليوم",

            value: dashboard.todayDepartures,

            color: "warning"

        }

    ];

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-header bg-dark text-white fw-bold">

                {

                    isEnglish

                        ? "Reservation Summary"

                        : "ملخص الحجوزات"

                }

            </div>

            <div className="card-body">

                <div className="row">

                    {

                        cards.map((card, index) => (

                            <div
                                key={index}
                                className="col-lg-2 col-md-4 col-sm-6 mb-3"
                            >

                                <div className="card border h-100">

                                    <div className="card-body text-center">

                                        <h3
                                            className={`text-${card.color} fw-bold`}
                                        >

                                            {card.value}

                                        </h3>

                                        <small className="text-muted">

                                            {card.title}

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

export default ReservationSummary;