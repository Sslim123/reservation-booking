import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookingSuccesses = ({ resetBooking, setBookingData, setActivePlan, setBookingError, setIsSubmitting,
    reservation
    , setBookingSuccess, setAvailableRooms, bookingData, isEnglish }) => {
    const navigate = useNavigate();

    const handleReturnHome = () => {
        resetBooking();
        setTimeout(() => {         navigate("/");  }, 0);
    };
    return (
        <Card className="shadow-lg border-0">
            <Card.Body className="p-5 text-center">
                <h2 className="text-success">                 ✓ </h2>
                <h3>
                    {isEnglish ? "Reservation Confirmed and email sent " : " تم تأكيد الحجز"}
                </h3>
                <hr />
                <h5>
                    {isEnglish ? "Booking Reference" : "رقم الحجز"}
                </h5>
                <h2 className="fw-bold">
                    {reservation?.booking_reference}
                </h2>
                <hr />
                <div className="text-start">
                    <p>
                        <strong>
                            Guest
                        </strong>
                        <br />
                        {reservation?.first_name}
                        {" "}
                        {reservation?.last_name}
                    </p>
                    <p>
                        <strong>
                            Check In
                        </strong>
                        <br />
                        {reservation?.check_in ? new Date(reservation?.check_in).toLocaleDateString("en-GB") : ""}
                    </p>
                    <p>
                        <strong>
                            Check Out
                        </strong>
                        <br />
                        {reservation?.check_out ? new Date(reservation?.check_out)?.toLocaleDateString("en-GB") : ""}
                    </p>
                    <p>
                        <strong>
                            Adults
                        </strong>
                        <br />
                        {reservation?.adults}
                    </p>
                    <p>
                        <strong>
                            Children
                        </strong>
                        <br />
                        {reservation?.children}
                    </p>
                    <p>
                        <strong>
                            Payments
                        </strong>
                        <br/>
                            {reservation?.payment_method}
                            <br/>
                             <strong>
                            Status
                        </strong>
                            {reservation?.payment_status}
                            <br/>
                             <strong>
                            Amount
                        </strong>
                            {reservation?.total_amount}
                    </p>
                </div>
                <div className="mt-4">
                    <Button
                        variant="warning"
                        onClick={handleReturnHome}

                    >
                        {isEnglish ? "Return Home" : "العودة للرئيسية"}
                    </Button>
                    <Button
                        variant="warning"
                        onClick={() => navigate("/manage-reservation",
                            {
                                state: {
                                    bookingReference: reservation.booking_reference,
                                    email: reservation.email

                                }

                            }
                        )}
                    >
                        {isEnglish ? "Manage Reservation" : "إدارة الحجز"}
                    </Button>
                </div>
            </Card.Body>
        </Card >
    );
};

export default BookingSuccesses;