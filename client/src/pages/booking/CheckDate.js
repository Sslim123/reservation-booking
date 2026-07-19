import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css"; 
import SelectedRooms from "../../components/SelectedRooms";
import PackageSelection from "../../components/PackageSelection";
import BookingNight from "./BookingNight";
import PaymentInformation from "../../components/payments/PaymentInformation";
import BookingSummary from "./BookingSummary";
function CheckDate({ isEnglish, bookingData, setBookingData, bookingSuccess,
  setBookingSuccess, bookingError,
  setBookingError, isSubmitting, setIsSubmitting, reservation, setReservation
}) {
  const [changeRoom, setChangeRoom] = useState(1);
  const [changeAdult, setChangeAdult] = useState(1);
  const [changeChild, setChangeChild] = useState(0);

  const [availableRooms, setAvailableRooms] = useState([]);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [availabilityType, setAvailabilityType] = useState("success");

  const [selectRoom, setSelectRoom] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedPackage, setSeletedPackage] = useState("");
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_LOCAL_HOST}/api/packages`
        );
        const data = await response.json();
        if (data.success) {
          setPackages(data.packages);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadPackages();
  }, []);
  const handleConfirmChoices = () => {
    if (changeRoom <= 0 || changeAdult <= 0) {
      alert(isEnglish ? "Please select at least 1 Room and 1 Adult." : "يرجى اختيار غرفة واحدة وشخص بالغ واحد على الأقل.");
      return;
    }
    setBookingData(prev => ({
      ...prev,
      rooms_requested: changeRoom,
      adults: changeAdult,
      children: changeChild
    }));

    setSelectRoom(false);
  };

  const handleFinalSubmit = async (e) => {
    console.log("Search button clicked");
    e.preventDefault();
    if (!bookingData.check_in || !bookingData.check_out) {
      return;
    }
    const payload = {
      check_in: bookingData?.check_in.toISOString().split("T")[0],
      check_out: bookingData?.check_out.toISOString().split("T")[0],
      rooms_requested: changeRoom
    };
    setLoading(true);
    console.log("Booking Data:", bookingData);

    console.log("Payload:", payload);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/api/bookings/check-availability`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
      if (!response.ok) {

        throw new Error("Availability request failed.");

      }
      const result = await response.json();
      console.log(" result is ", result);
      if (result.rooms?.length > 0) {
        setBookingData(prev => ({
          ...prev,
          check_in: new Date(payload.check_in),
          check_out: new Date(payload.check_out),
          rooms_requested: changeRoom,
          adults: changeAdult,
          children: changeChild
        }));
        setAvailabilityType("success");

        setAvailableRooms(result.rooms);
        setAvailabilityMessage(
          isEnglish
            ? "Please select a room below."
            : "يرجى اختيار غرفة من القائمة بالأسفل."
        );
      } else {
        setAvailabilityType("danger");

        setAvailabilityMessage(result.message);
      }
    }
    finally {
      setLoading(false)
    }
  };
  console.log("check_in:", bookingData.check_in);
  console.log("check_out:", bookingData.check_out);
  console.log("check_in instanceof Date:", bookingData.check_in instanceof Date);
  console.log("check_out instanceof Date:", bookingData.check_out instanceof Date);
  return (
    <div className="w-100 bg-white shadow-sm rounded-3 p-4 border mb-4 position-relative">
      <div className="mb-3 text-start">
        <span className="badge bg-dark text-warning px-3 py-1.5 rounded-pill small text-uppercase tracking-wider">
          📍 {isEnglish ? "Destinations: Glasgow, London, Manchester" : "الوجهات: غلاسكو، لندن، مانشستر"}
        </span>
      </div>

      <form onSubmit={handleFinalSubmit} className="row g-3 align-items-end text-start">
        <div className="col-12 col-sm-6 col-md-3">
          <label className="small fw-bold text-secondary mb-1 d-block">
            {isEnglish ? "Check-In Date" : "تاريخ الوصول"}
          </label>
          <DatePicker
            className="form-control py-2 border-secondary-subtle w-100"
            placeholderText="dd/mm/yyyy"
            selected={bookingData.check_in}
            onChange={(date) =>
              setBookingData(prev => ({
                ...prev,
                check_in: date,
                check_out:
                  prev.check_out &&
                    prev.check_out <= date
                    ? null
                    : prev.check_out
              }))}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            required
          />
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <label className="small fw-bold text-secondary mb-1 d-block">
            {isEnglish ? "Check-Out Date" : "تاريخ المغادرة"}
          </label>
          <DatePicker
            className="form-control py-2 border-secondary-subtle w-100"
            placeholderText="dd/mm/yyyy"
            selected={bookingData.check_out}
            onChange={(date) =>
              setBookingData(prev => ({
                ...prev,
                check_out: date
              }))
            }

            dateFormat="dd/MM/yyyy"
            minDate={
              bookingData.check_in
                ? new Date(
                  bookingData.check_in.getTime() + 86400000
                )
                : new Date()
            }
            disabled={!bookingData.check_in}
            required
          />
        </div>

        <div className="col-12 col-sm-6 col-md-3 position-relative">
          <label className="small fw-bold text-secondary mb-1 d-block">
            {isEnglish ? "Rooms & Guests" : "الغرف والضيوف"}
          </label>
          <button
            type="button"
            className="form-control py-2 border-secondary-subtle text-start bg-white d-flex justify-content-between align-items-center"
            onClick={() => setSelectRoom(!selectRoom)}
          >
            <span className="small text-dark fw-semibold">
              {changeRoom} {isEnglish ? "Rm" : "غرفة"} • {changeAdult} {isEnglish ? "Ad" : "بالغ"} • {changeChild} {isEnglish ? "Ch" : "طفل"}
            </span>
            <span className="text-muted small">▼</span>
          </button>

          {selectRoom && (
            <div className="position-absolute start-0 end-0 bg-white border rounded shadow p-3 mt-1 z-3" style={{ minWidth: "260px" }}>

              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small fw-bold text-dark">{isEnglish ? "Rooms" : "الغرف"}</span>
                <div className="d-flex align-items-center gap-2">
                  <Button size="sm" variant="outline-secondary" className="px-2 py-0" onClick={() => setChangeRoom(p => Math.max(1, p - 1))}>-</Button>
                  <span className="small fw-bold px-1">{bookingData.rooms_requested}</span>
                  <Button size="sm" variant="outline-secondary" className="px-2 py-0" onClick={() => setChangeRoom(p => p + 1)}>+</Button>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small fw-bold text-dark">{isEnglish ? "Adults" : "البالغين"}</span>
                <div className="d-flex align-items-center gap-2">
                  <Button size="sm" variant="outline-secondary" className="px-2 py-0" onClick={() => setChangeAdult(p => Math.max(1, p - 1))}>-</Button>
                  <span className="small fw-bold px-1">{bookingData.rooms_requested}</span>
                  <Button size="sm" variant="outline-secondary" className="px-2 py-0" onClick={() => setChangeAdult(p => p + 1)}>+</Button>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="small fw-bold text-dark">{isEnglish ? "Children" : "الأطفال"}</span>
                <div className="d-flex align-items-center gap-2">
                  <Button size="sm" variant="outline-secondary" className="px-2 py-0" onClick={() => setChangeChild(p => Math.max(0, p - 1))}>-</Button>
                  <span className="small fw-bold px-1">{bookingData.rooms_requested}</span>
                  <Button size="sm" variant="outline-secondary" className="px-2 py-0" onClick={() => setChangeChild(p => p + 1)}>+</Button>
                </div>
              </div>

              <Button size="sm" variant="warning" className="w-100 fw-bold text-uppercase" onClick={handleConfirmChoices}>
                {isEnglish ? "Apply" : "تطبيق"}
              </Button>
            </div>
          )}
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <Button
            type="submit" variant="dark" className="w-100 py-2 fw-bold text-uppercase tracking-wider shadow-sm">
            {isEnglish ? "Search Stay" : "بحث عن إقامة"}
          </Button>
        </div>
        {availabilityMessage && (
          <div
            className={`alert mt-3 ${availabilityType === "success"
              ? "alert-success"
              : "alert-danger"
              }`}
          >
            <strong>
              {availabilityType === "success" ? "✓ " : "⚠ "}
            </strong>

            {availabilityMessage}
          </div>
        )}
      </form>

      {availableRooms?.length > 0 && (
        <SelectedRooms availableRooms={availableRooms}
          bookingData={bookingData}
          isEnglish={isEnglish}
          setBookingData={setBookingData} />
      )}
      {bookingData.room_id && (
        <PackageSelection
          packages={packages}
          bookingData={bookingData}
          setBookingData={setBookingData}
          isEnglish={isEnglish}
        />
      )}
      {bookingData.room_id && bookingData.package_id && (
        <div className="mt-4">
          <BookingNight packages={packages} isEnglish={isEnglish} bookingData={bookingData} setBookingData={setBookingData}
            bookingSuccess={bookingSuccess} setBookingSuccess={setBookingSuccess}
            bookingError={bookingError} setBookingError={setBookingError}
            reservation={reservation} setReservation={setReservation}
            isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} /></div>
      )}
    </div>
  );
}

export default CheckDate;
