import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PaymentInformation from "../../components/payments/PaymentInformation";
import BookingSummary from "./BookingSummary";
const BookingNight = ({ packages, isEnglish, currentPlan,
  bookingData, setBookingData, bookingError, setBookingError, reservation, setReservation,
  isSubmitting, setIsSubmitting, bookingSuccess, setBookingSuccess, }) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setBookingError("");
    setIsSubmitting(true);
    try {
      const payload = {
        ...bookingData,
        check_in: bookingData.check_in.toISOString().split("T")[0],
        check_out: bookingData.check_out.toISOString().split("T")[0]
      };
      console.log("Sending Booking...");
      console.log(payload);
      if (!bookingData.room_id) {

        setBookingError("Please select a room.");

        return;
      }

      if (!bookingData.package_id) {

        setBookingError("Please select a package.");

        return;
      }
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/api/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        setBookingError(result.message);
        return;
      }
      setReservation(result.reservation)
      console.log(result.reservation);
      setBookingSuccess(true);
    }
    catch (err) {
      console.log(err);
      setBookingError(err.message);
    }
    finally {
      setIsSubmitting(false);
    }

  };
  return (
    <div className="text-start py-2">
      <Form className="p-2" onSubmit={handleFormSubmit}>
        <div className="mb-4 bg-light p-2 rounded text-center border border-dashed">
          <span className="small fw-bold text-muted text-uppercase">

            {bookingData.package_id
              ? (
                isEnglish
                  ? packages.find(p => p.id === bookingData.package_id)?.name_en
                  : packages.find(p => p.id === bookingData.package_id)?.name_ar
              )
              : (
                isEnglish
                  ? "No Package Selected"
                  : "لم يتم اختيار باقة"
              )}


          </span>
        </div>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <Form.Group controlId="firstName">
              <Form.Label className="small fw-bold text-secondary">
                {isEnglish ? "First Name" : "الاسم الارل"}
              </Form.Label>
              <Form.Control
                type="text"
                value={bookingData.first_name}
                onChange={(e) =>
                  setBookingData(prev => ({
                    ...prev,
                    first_name: e.target.value
                  }))

                }
                placeholder={isEnglish ? "e.g., John" : "مثال: سالم"}
                required
                className="py-2 border-secondary-subtle"
              />
            </Form.Group>
          </div>

          <div className="col-12 col-md-6">
            <Form.Group controlId="lastName">
              <Form.Label className="small fw-bold text-secondary">
                {isEnglish ? "Last Name" : "اسم العائلة"}
              </Form.Label>
              <Form.Control
                type="text"
                value={bookingData.last_name}
                onChange={(e) =>
                  setBookingData(prev => ({
                    ...prev,
                    last_name: e.target.value
                  }))
                }
                min="1"
                placeholder={isEnglish ? "e.g., Jhon" : "هاشم"}
                required
                className="py-2 border-secondary-subtle"
              />
            </Form.Group>
          </div>

          <div className="col-12 col-md-6">
            <Form.Group controlId="email">
              <Form.Label className="small fw-bold text-secondary">
                {isEnglish ? "Email Address" : "البريد الإلكتروني"}
              </Form.Label>
              <Form.Control
                type="email"
                value={bookingData.email}
                onChange={(e) =>
                  setBookingData(prev => ({
                    ...prev,
                    email: e.target.value
                  }))

                }
                placeholder={isEnglish ? "e.g., name@example.com" : "مثال: name@example.com"}
                required
                className="py-2 border-secondary-subtle"
              />
              <Form.Text className="text-muted" style={{ fontSize: "0.75rem" }}>
                {isEnglish ? "We'll never share your email with anyone else." : "لن نشارك بريدك الإلكتروني مع أي شخص آخر."}
              </Form.Text>
            </Form.Group>
          </div>

          <div className="col-12 col-md-6">
            <Form.Group controlId="phone">
              <Form.Label className="small fw-bold text-secondary">
                {isEnglish ? "Phone Number" : "رقم الهاتف"}
              </Form.Label>
              <Form.Control
                type="tel"
                value={bookingData.phone}

                onChange={(e) =>

                  setBookingData(prev => ({

                    ...prev,

                    phone: e.target.value

                  }))

                }
                placeholder={isEnglish ? "e.g., +44 73498..." : "مثال: +44 73498..."}
                required
                className="py-2 border-secondary-subtle"
              />
            </Form.Group>
          </div>

          <div className="col-12 col-md-6">
            <Form.Group controlId="specialRequests">
              <Form.Label className="small fw-bold text-secondary">
                {isEnglish ? "Special Requests" : "طلبات خاصة"}
              </Form.Label>
              <Form.Control
                as="textarea"

                rows={3}

                value={bookingData.special_requests}

                onChange={(e) =>

                  setBookingData(prev => ({

                    ...prev,

                    special_requests: e.target.value

                  }))

                }
                min="1"
                placeholder={
                  isEnglish
                    ?
                    "Late check-in, extra pillow..."
                    :
                    "مثال: تسجيل وصول متأخر..."
                }
                required
                className="py-2 border-secondary-subtle"
              />
            </Form.Group>
          </div>

          <PaymentInformation

            bookingData={bookingData}

            setBookingData={setBookingData}

            isEnglish={isEnglish}

          />


          <BookingSummary
            acceptedTerms={acceptedTerms}
            setAcceptedTerms={setAcceptedTerms}
            bookingData={bookingData}
            setBookingData={setBookingData}
            packages={packages}

            isEnglish={isEnglish}

            isSubmitting={isSubmitting}

          />

        </div>
      </Form>
    </div>
  );
};

export default BookingNight;
