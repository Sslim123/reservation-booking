import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const BookingSummary = ({ acceptedTerms, setAcceptedTerms, bookingData, setBookingData, packages, reservation, isEnglish, isSubmitting, handleBooking

}) => {
    const selectedPackage = packages.find(pkg => pkg.id === bookingData.package_id);
    const checkIn = new Date(bookingData.check_in);
    const checkOut = new Date(bookingData.check_out);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const packagePrice = selectedPackage?.price_per_night || 0;
    const totalAmount = packagePrice * bookingData.rooms_requested * nights;
    useEffect(() => {
        setBookingData(prev => ({ ...prev, total_amount: totalAmount }));
    }, [totalAmount]);
    return (

        <div className="card mt-4 shadow-sm">

            <div className="card-header bg-success text-white">

                <strong>

                    {

                        isEnglish

                            ? "Booking Summary"

                            : "ملخص الحجز"

                    }

                </strong>

            </div>

            <div className="card-body">

                <div className="row">

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Guest"

                                    : "اسم النزيل"

                            }

                        </strong>

                        <div>

                            {bookingData.first_name}

                            {" "}

                            {bookingData.last_name}

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>Email</strong>

                        <div>

                            {bookingData.email}

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Phone"

                                    : "الهاتف"

                            }

                        </strong>

                        <div>

                            {bookingData.phone}

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Guests"

                                    : "عدد النزلاء"

                            }

                        </strong>

                        <div>

                            {bookingData.adults}

                            {

                                isEnglish

                                    ? " Adult(s)"

                                    : " بالغ"

                            }

                            {

                                bookingData.children > 0 &&

                                ` + ${bookingData.children} ` +

                                (

                                    isEnglish

                                        ? "Child(ren)"

                                        : "طفل"

                                )

                            }

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>
                            {isEnglish ? "Check-In" : "تاريخ الوصول"}
                        </strong>
                        <div>           {bookingData.check_in?.toISOString().split("T")[0]}       </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>
                            {
                                isEnglish ? "Check-Out" : "تاريخ المغادرة"
                            }
                        </strong>
                        <div>             {bookingData.check_out?.toISOString().split("T")[0]}       </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Room"

                                    : "الغرفة"

                            }

                        </strong>

                        <div>

                            {bookingData.room_number}

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Package"

                                    : "الباقة"

                            }

                        </strong>

                        <div>

                            {

                                isEnglish

                                    ? selectedPackage?.name_en

                                    : selectedPackage?.name_ar

                            }

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Number of Nights"

                                    : "عدد الليالي"

                            }

                        </strong>

                        <div>

                            {nights}

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Rooms"

                                    : "عدد الغرف"

                            }

                        </strong>

                        <div>

                            {bookingData.rooms_requested}

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Payment Method"

                                    : "طريقة الدفع"

                            }

                        </strong>

                        <div>

                            {bookingData.payment_method}

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>

                            {

                                isEnglish

                                    ? "Payment Status"

                                    : "حالة الدفع"

                            }

                        </strong>

                        <div>

                            {

                                isEnglish

                                    ? "Pending"

                                    : "بانتظار الدفع"

                            }

                        </div>

                    </div>

                    {

                        bookingData.reference_number &&

                        <div className="col-md-6 mb-3">

                            <strong>

                                {

                                    isEnglish

                                        ? "Reference Number"

                                        : "رقم المرجع"

                                }

                            </strong>

                            <div>

                                {bookingData.reference_number}

                            </div>

                        </div>

                    }

                    {

                        bookingData.special_requests &&

                        <div className="col-12 mb-3">

                            <strong>

                                {

                                    isEnglish

                                        ? "Special Requests"

                                        : "طلبات خاصة"

                                }

                            </strong>

                            <div>

                                {bookingData.special_requests}

                            </div>

                        </div>

                    }

                </div>

                <hr />

                <div className="d-flex justify-content-between">

                    <h5>

                        {

                            isEnglish

                                ? "Total Amount"

                                : "إجمالي المبلغ"

                        }

                    </h5>

                    <h4 className="text-success">

                        £{totalAmount.toFixed(2)}

                    </h4>

                </div>

                <div className="alert alert-warning mt-3">

                    {

                        isEnglish

                            ? "Please review your booking carefully before confirming. A confirmation email containing these details will be sent immediately after your reservation is completed."

                            : "يرجى مراجعة بيانات الحجز بعناية قبل التأكيد. سيتم إرسال رسالة تأكيد تحتوي على جميع هذه المعلومات مباشرة بعد إتمام الحجز."

                    }

                </div>
                <div className="col-12 my-3">
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            checked={acceptedTerms}
                            onClick={(e) => setAcceptedTerms(e.target.checked)}
                            label={isEnglish ? "I agree to the hotel booking terms & conditions" : "أوافق على شروط وأحكام حجز الفندق"}
                            required
                            className="small text-muted"
                        />
                    </Form.Group>
                </div>
                <div className="d-grid">
                    <button
                        variant="dark"
                        type="submit"
                        className="btn btn-success btn-lg"
                        disabled={isSubmitting || !acceptedTerms}

                    >
                        {isSubmitting ? (isEnglish ? "Processing Reservation..." : "جاري تأكيد الحجز...")
                            : (isEnglish ? "Confirm Reservation" : "تأكيد الحجز")
                        }
                    </button>
                </div>
            </div>
        </div>
    );

};

export default BookingSummary;