import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

const CustomerDetails = ({
    reservation,
    setSuccess,
    success,
    setReservation,
    isEnglish
}) => {

    const handleCancel = async () => {
        const confirmCancel = window.confirm(isEnglish
            ? "Are you sure you want to cancel this reservation?"
            : "هل أنت متأكد من إلغاء هذا الحجز؟"
        );
        if (!confirmCancel) return;
        try {
            const response = await fetch(
                `${process.env.REACT_APP_LOCAL_HOST}/api/customer/${reservation.booking_reference}/cancel`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        reason: "Guest requested cancellation"
                    })
                }
            );
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message);
            }
            setReservation({
                ...reservation,
                status: "CANCELLED",
                cancelled_by: "CUSTOMER",
                cancellation_reason: result.reason || "Guest requested cancellation"
            });
            alert(result.message);
        }
        catch (err) {
            console.error(err);
        }
    };
    const badgeColor = () => {
        switch (reservation.status) {
            case "CONFIRMED":
                return "primary";
            case "CHECKED_IN":
                return "success";
            case "CHECKED_OUT":
                return "secondary";
            case "CANCELLED":
                return "danger";
            default:
                return "dark";
        }
    };

    return (

        <Card className="shadow border-0 mt-4">
            {success && <div className="alert alert-success"> {success}     </div>}
            <Card.Body>

                <h3 className="mb-4">

                    {

                        isEnglish

                            ?

                            "Reservation Details"

                            :

                            "تفاصيل الحجز"

                    }

                </h3>

                <div className="row">

                    <div className="col-md-6">

                        <p>

                            <strong>

                                {

                                    isEnglish

                                        ?

                                        "Booking Reference"

                                        :

                                        "رقم الحجز"

                                }

                            </strong>

                            <br />

                            {reservation.booking_reference}

                        </p>

                        <p>

                            <strong>

                                {

                                    isEnglish

                                        ?

                                        "Guest"

                                        :

                                        "الضيف"

                                }

                            </strong>

                            <br />

                            {reservation.first_name}

                            {" "}

                            {reservation.last_name}

                        </p>

                        <p>

                            <strong>

                                Room

                            </strong>

                            <br />

                            {reservation.rooms?.room_number}

                        </p>

                        <p>

                            <strong>

                                Package

                            </strong>

                            <br />

                            {

                                isEnglish

                                    ?

                                    reservation.packages?.name_en

                                    :

                                    reservation.packages?.name_ar

                            }

                        </p>

                    </div>

                    <div className="col-md-6">

                        <p>

                            <strong>

                                Check In

                            </strong>

                            <br />

                            {new Date(

                                reservation.check_in

                            ).toLocaleDateString()}

                        </p>

                        <p>

                            <strong>

                                Check Out

                            </strong>

                            <br />

                            {new Date(

                                reservation.check_out

                            ).toLocaleDateString()}

                        </p>

                        <p>

                            <strong>

                                Guests

                            </strong>

                            <br />

                            {

                                reservation.adults

                            }

                            {" Adult(s), "}

                            {

                                reservation.children

                            }

                            {" Child(ren)"}

                        </p>

                        <p>

                            <strong>

                                Status

                            </strong>

                            <br />

                            <Badge bg={badgeColor()}>

                                {reservation.status}

                            </Badge>
                            {

                                reservation.status === "CANCELLED" &&

                                <div className="alert alert-warning mt-3">

                                    <strong>

                                        {

                                            isEnglish

                                                ?

                                                "Cancellation Reason"

                                                :

                                                "سبب الإلغاء"

                                        }

                                    </strong>

                                    <br />

                                    {

                                        reservation.cancellation_reason

                                    }

                                </div>

                            }
                        </p>

                    </div>

                </div>

                {

                    reservation.special_requests &&

                    <div className="mt-3">

                        <strong>

                            {

                                isEnglish

                                    ?

                                    "Special Requests"

                                    :

                                    "طلبات خاصة"

                            }

                        </strong>

                        <div className="border rounded p-3 bg-light">

                            {

                                reservation.special_requests

                            }

                        </div>

                    </div>

                }

                {

                    reservation.status === "CONFIRMED" &&

                    <div className="text-end mt-4">

                        <Button

                            variant="danger"

                            onClick={handleCancel}

                        >

                            {

                                isEnglish

                                    ?

                                    "Cancel Reservation"

                                    :

                                    "إلغاء الحجز"

                            }

                        </Button>

                    </div>

                }

            </Card.Body>

        </Card>

    );

};

export default CustomerDetails;