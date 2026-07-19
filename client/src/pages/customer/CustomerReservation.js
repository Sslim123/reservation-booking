import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import CustomerLookup from "./CustomerLookup";
import CustomerDetails from "./CustomerDetails";

const ManageReservation = ({ isEnglish, setIsEnglish }) => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [reservation, setReservation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success,setSuccess]=useState("");
    const defaultBooking = searchParams.get("ref") || "";
    const defaultEmail = location.state?.email || "";

    const [email, setEmail] = useState(defaultEmail);
    const [bookingReference, setBookingReference] = useState(defaultBooking);


    const searchReservation = async (bookingReference, email) => {

        setLoading(true);
        setError("");
        try {
            const response = await fetch(
                `${process.env.REACT_APP_LOCAL_HOST}/api/customer/reservation`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        booking_reference: bookingReference,
                        email
                    })
                }
            );
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message);
            }
            setReservation(result.reservation);
        }
        catch (err) {
            setReservation(null);
            setError(err.message);
        }
        finally { setLoading(false); }
    };
    return (
        <div
            className="d-flex flex-column min-vh-100 bg-light"
            dir={isEnglish ? "ltr" : "rtl"}
        >

            <Heading
                isEnglish={isEnglish}
                setIsEnglish={setIsEnglish}
            />

            <main className="flex-grow-1">

                <div className="container py-5">

                    <div className="row justify-content-center">

                        <div className="col-lg-8">

                            <CustomerLookup

                                isEnglish={isEnglish}

                                onSearch={searchReservation}

                                loading={loading}

                            />

                            {

                                error &&

                                <div className="alert alert-danger mt-4">

                                    {error}

                                </div>

                            }

                            {

                                reservation &&

                                <CustomerDetails
                                     setSuccess={setSuccess}
                                     success={success}
                                    reservation={reservation}
                                    setReservatio={setReservation}
                                    isEnglish={isEnglish}

                                />

                            }

                        </div>

                    </div>

                </div>

            </main>

            <Footer />

        </div>

    );

};

export default ManageReservation;