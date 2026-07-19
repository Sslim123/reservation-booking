import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import BookingGuest from '../booking/BookingGuest.js'
import CustomerProflie from "../customer/CustomerProfile.js"
function ReceptionDashboard({ isEnglish, setIsEnglish }) {
const [selectedReservation, setSelectedReservation] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [transactionReference, setTransactionReference] = useState("");
  const [paymentNotes, setPaymentNotes] = useState("");
  const [reservation, setReservation] = useState([]);
  const [amount, setAmount] = useState(0)

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("Guest requested cancellation");
  const [otherReason, setOtherReason] = useState("");

  const [loading, setLoading] = useState(true);
  const [resultSearch, setResultSearch] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  const loadReservations = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/api/reception/reservations`
      );
      const result = await response.json();
      if (result.success) {
        setReservation(result.reservation);
      }
    }
    catch (error) { console.error(error); }

  };
  useEffect(() => {

    loadReservations();

  }, []);
  const handleCheckIn = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/api/reception/${id}/check-in`,
        { method: "PUT" });
      const result = await response.json();

      if (result.success) {

        await loadReservations();
      }
    } catch (error) {
      console.error(error)

    }
  };
  const handleCheckOut = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/api/reception/${id}/check-out`,
        { method: "PUT" });
      const result = await response.json();

      if (result.success) {

        await loadReservations();
      }
    } catch (error) {
      console.error(error)

    }
  };
  const confirmPayment = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_LOCAL_HOST}/api/payments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          booking_id: selectedBookingId,
          payment_method: paymentMethod,
          reference_number: transactionReference,
          amount: amount,
          notes: paymentNotes,
          received_by: 3
        })
      }
    );
    const result = await response.json();
    console.log(result);
    setAmount(result.total_amount);
    setShowPaymentModal(false);
    loadReservations();
  };

  const confirmCancellation = async () => {

    const reason = cancelReason === "Other" ? otherReason : cancelReason;
    await fetch(`${process.env.REACT_APP_LOCAL_HOST}/api/reception/${selectedBookingId}/cancel`,
      {

        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          reason
        })
      }
    );
    setShowCancelModal(false);
    loadReservations();

  };

  const filteredResults = reservation?.filter(r => {
    const search = resultSearch.toLowerCase();

    return (

      r.first_name?.toLowerCase().includes(search) ||

      r.last_name?.toLowerCase().includes(search) ||

      r.email?.toLowerCase().includes(search) ||

      r.booking_reference?.toLowerCase().includes(search) ||
      String(r.rooms?.room_number || "").includes(search)


    );

  });
  return (
    <div className="container-fluid px-4 mt-4" style={{ direction: isEnglish ? 'ltr' : 'rtl' }}>
      {selectedProfile && (
        <div className="mb-4 p-4 border border-light rounded-3 shadow-sm bg-white">
          <CustomerProfile reservation={selectedProfile} isEnglish={isEnglish} />
        </div>
      )}

      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg fs-6 shadow-sm border-light-subtle"
          placeholder={isEnglish ? "Search by customer name, email or reference..." : "بحث عن طريق اسم العميل، البريد الإلكتروني أو المرجع..."}
          value={resultSearch}
          onChange={e => setResultSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive rounded-3 shadow-sm border border-light bg-white">
        <table className="table table-striped table-hover align-middle mb-0 text-center">
          <thead className="table-dark align-middle">
            <tr>
              <th className={isEnglish ? "text-start ps-3" : "text-end pe-3"}>
                {isEnglish ? "Guest Name" : "اسم الضيف"}
              </th>
              <th>{isEnglish ? "Email" : "البريد الإلكتروني"}</th>
              <th>{isEnglish ? "Room" : "الغرفة"}</th>
              <th>{isEnglish ? "Package" : "الباقة"}</th>
              <th>{isEnglish ? "Booking Ref" : "مرجع الحجز"}</th>
              <th>{isEnglish ? "Check In" : "تاريخ الوصول"}</th>
              <th>{isEnglish ? "Check Out" : "تاريخ المغادرة"}</th>
              <th>{isEnglish ? "Status" : "الحالة"}</th>
              <th>{isEnglish ? "Nights" : "الليالي"}</th>
              <th className="text-center">{isEnglish ? "Actions" : "الإجراءات"}</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults && filteredResults.map((result) => {
              const currentPackageName = isEnglish
                ? (result.packages?.name_en || result.packages?.name)
                : (result.packages?.name_ar || result.packages?.name_en || result.packages?.name);

              return (
                <tr key={result.id}>
                  <td className={`fw-semibold text-dark ${isEnglish ? "text-start ps-3" : "text-end pe-3"}`}>
                    {result.first_name} {result.last_name}
                  </td>
                  <td className="text-muted small">{result.email}</td>
                  <td>
                    <span className="badge bg-light text-dark border px-2 py-1">
                      {result.rooms?.room_number || "—"}
                    </span>
                  </td>
                  <td className="small">{currentPackageName || "—"}</td>
                  <td className="text-uppercase font-monospace text-secondary small fw-bold">
                    {result.booking_reference}
                  </td>
                  <td className="small text-nowrap">{result.check_in}</td>
                  <td className="small text-nowrap">{result.check_out}</td>
                  <td>
                    <span className={`badge px-2.5 py-1.5 fw-semibold ${result.status === "CONFIRMED" ? "bg-success-subtle text-success border border-success-subtle" :
                      result.status === "CHECKED_IN" ? "bg-primary-subtle text-primary border border-primary-subtle" :
                        result.status === "CHECKED_OUT" ? "bg-secondary-subtle text-secondary border border-secondary-subtle" :
                          "bg-warning-subtle text-warning-cone border border-warning-subtle"
                      }`}>
                      {result.status}
                    </span>
                  </td>
                  <td className="fw-medium">{result.nights}</td>

                  <td className="text-nowrap p-2">
                    <div className="d-flex gap-1.5 justify-content-center align-items-center">

                      <Button
                        size="sm"
                        variant="primary"
                        className="px-2.5 py-1 fw-medium"
                        onClick={() => setSelectedProfile(result)}
                      >
                        {isEnglish ? "Details" : "التفاصيل"}
                      </Button>

                      {result.status === "CONFIRMED" && (
                        <Button
                          size="sm"
                          variant="success"
                          className="px-2.5 py-1 fw-medium text-white"
                          onClick={() => {
                            setSelectedBookingId(result.id);
                            setAmount(result.total_amount);   // <-- Missing
                            setPaymentMethod(result.payment_method || "CASH");
                            setTransactionReference("");
                            setPaymentNotes("");
                                setSelectedReservation(result);
                            setShowPaymentModal(true);
                          }}
                        >
                          {isEnglish ? "Receive Payment" : "استلام الدفع"}
                        </Button>
                      )}

                      {result.status === "CHECKED_IN" && (
                        <Button
                          size="sm"
                          variant="warning"
                          className="px-2.5 py-1 fw-medium text-dark"
                          onClick={() => handleCheckOut(result.id)}
                        >
                          {isEnglish ? "Check Out" : "تسجيل المغادرة"}
                        </Button>
                      )}

                      {result.status === "CONFIRMED" && (
                        <Button
                          size="sm"
                          variant="danger"
                          className="px-2.5 py-1 fw-medium"
                          onClick={() => {
                            setSelectedBookingId(result.id);
                            setCancelReason("Guest requested cancellation");
                            setOtherReason("");
                            setShowCancelModal(true);
                          }}
                        >
                          {isEnglish ? "Cancel" : "إلغاء"}
                        </Button>
                      )}

                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
      >

        <Modal.Header closeButton>

          <Modal.Title>

            Receive Payment

          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Form>

            <Form.Label>

              Payment Method

            </Form.Label>

            <Form.Select

              value={paymentMethod}

              onChange={(e) => setPaymentMethod(e.target.value)}

            >

              <option value="CASH">

                Cash

              </option>

              <option value="CARD">

                Card

              </option>

              <option value="BANK_TRANSFER">

                Bank Transfer

              </option>

            </Form.Select>

            <Form.Group className="mt-3">

              <Form.Label>

                Transaction Reference

              </Form.Label>

              <Form.Control

                value={transactionReference}

                onChange={(e) =>

                  setTransactionReference(

                    e.target.value

                  )

                }

              />

            </Form.Group>
            <Form.Group className="mt-3">

              <Form.Label>

                Notes

              </Form.Label>

              <Form.Control

                as="textarea"

                rows={3}

                value={paymentNotes}

                onChange={(e) =>

                  setPaymentNotes(

                    e.target.value

                  )

                }

              />

            </Form.Group>
            <Form.Group className="mt-3">

              <Form.Label>

                Amount

              </Form.Label>

              <Form.Control

                value={amount}

                readOnly

              />

            </Form.Group>
          </Form>

        </Modal.Body>

        <Modal.Footer>

          <Button

            variant="secondary"

            onClick={() => setShowPaymentModal(false)}

          >

            Close

          </Button>

          <Button

            variant="success"

            onClick={confirmPayment}

          >

            Receive Payment

          </Button>

        </Modal.Footer>

      </Modal>
      <Modal
        show={showCancelModal}
        onHide={() => setShowCancelModal(false)}
      >

        <Modal.Header closeButton>

          <Modal.Title>

            Cancel Reservation

          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Form>

            <Form.Check

              type="radio"

              label="Guest requested cancellation"

              name="reason"

              value="Guest requested cancellation"

              checked={cancelReason === "Guest requested cancellation"}

              onChange={(e) => setCancelReason(e.target.value)}

            />

            <Form.Check

              type="radio"

              label="Duplicate reservation"

              name="reason"

              value="Duplicate reservation"

              checked={cancelReason === "Duplicate reservation"}

              onChange={(e) => setCancelReason(e.target.value)}

            />

            <Form.Check

              type="radio"

              label="Payment issue"

              name="reason"

              value="Payment issue"

              checked={cancelReason === "Payment issue"}

              onChange={(e) => setCancelReason(e.target.value)}

            />

            <Form.Check

              type="radio"

              label="Hotel operational issue"

              name="reason"

              value="Hotel operational issue"

              checked={cancelReason === "Hotel operational issue"}

              onChange={(e) => setCancelReason(e.target.value)}

            />

            <Form.Check

              type="radio"

              label="Other"

              name="reason"

              value="Other"

              checked={cancelReason === "Other"}

              onChange={(e) => setCancelReason(e.target.value)}

            />

            {

              cancelReason === "Other" &&

              <Form.Control

                className="mt-3"

                placeholder="Enter reason"

                value={otherReason}

                onChange={(e) => setOtherReason(e.target.value)}

              />

            }

          </Form>

        </Modal.Body>

        <Modal.Footer>

          <Button

            variant="secondary"

            onClick={() => setShowCancelModal(false)}

          >

            Close

          </Button>

          <Button

            variant="danger"

            onClick={confirmCancellation}

          >

            Confirm Cancellation

          </Button>

        </Modal.Footer>

      </Modal>
    </div>

  );
};
export default ReceptionDashboard;