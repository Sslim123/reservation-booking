import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import CheckDate from "./CheckDate";
import Slides from "../../components/Slides";
import BookingSuccesses from "./BookingSuccesses";
import TrustStrip from "./TrustStrip";
import WhyBookDirect from "./WhyBookDirect";

const Booking = ({ isEnglish, setIsEnglish, toggleLanguage }) => {
  const [activePlan, setActivePlan] = useState(null);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [reservation, setReservation] = useState(null);
  console.log("bookingSuccess:", bookingSuccess);
  const initialBookingData = {
    room_id: null,
    package_id: null,
    check_in: null,
    check_out: null,
    rooms_requested: 1,
    adults: 1,
    children: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    special_requests: "",
    payment_method: "PAY_AT_HOTEL",
    total_amount: 0,
    payment_status: "PENDING",
    reference_number: "",
    payment_notes: ""
  };

  const [bookingData, setBookingData] = useState(initialBookingData);

  const resetBooking = () => {
    setBookingSuccess(false);
    setReservation(null);
    setBookingError("");
    setAvailableRooms([]);
    setActivePlan(null);
    setIsSubmitting(false);
    setBookingData(initialBookingData);
  };
  return (
    <div className="d-flex flex-column min-vh-100 bg-light" dir={isEnglish ? "ltr" : "rtl"}>
      <Heading isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <main className="flex-grow-1">
        <div className="bg-white shadow-sm border-b mb-4">
          <Slides />
          <TrustStrip isEnglish={isEnglish} />
          <WhyBookDirect isEnglish={isEnglish} />
          <div className="container py-4">
            {!bookingSuccess ?
              (<CheckDate isEnglish={isEnglish}
                bookingData={bookingData}

                reservation={reservation}
                setReservation={setReservation}

                setBookingData={setBookingData}

                bookingSuccess={bookingSuccess}
                setBookingSuccess={setBookingSuccess}



                bookingError={bookingError}
                setBookingError={setBookingError}

                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
              />)
              : (<BookingSuccesses
                reservation={reservation}
                resetBooking={resetBooking}

                setBookingError={setBookingError}

                setBookingError={setBookingError}
                setBookingSuccess={setBookingSuccess}
                setAvailableRooms={setAvailableRooms}
                setBookingData={setBookingData}
                setIsSubmitting={setIsSubmitting}
                setActivePlan={setActivePlan}

                bookingData={bookingData}
                isEnglish={isEnglish} />)}
          </div>
        </div>

        <section className="container py-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
