import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const CustomerLookup = ({
    isEnglish,
    onSearch,
    loading
}) => {

    const [bookingReference, setBookingReference] = useState("");

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        onSearch(

            bookingReference.trim(),

            email.trim()

        );

    };

    return (

        <Card className="shadow border-0">

            <Card.Body className="p-4">

                <h3 className="text-center mb-4">

                    {

                        isEnglish

                            ?

                            "Manage Your Reservation"

                            :

                            "إدارة الحجز"

                    }

                </h3>

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">

                        <Form.Label>

                            {

                                isEnglish

                                    ?

                                    "Booking Reference"

                                    :

                                    "رقم الحجز"

                            }

                        </Form.Label>

                        <Form.Control

                            type="text"

                            placeholder={

                                isEnglish

                                    ?

                                    "Example: CYF-6AB276"

                                    :

                                    "مثال: CYF-6AB276"

                            }

                            value={bookingReference}

                            onChange={(e)=>

                                setBookingReference(

                                    e.target.value.toUpperCase()

                                )

                            }

                            required

                        />

                    </Form.Group>

                    <Form.Group className="mb-4">

                        <Form.Label>

                            Email

                        </Form.Label>

                        <Form.Control

                            type="email"

                            placeholder="example@email.com"

                            value={email}

                            onChange={(e)=>

                                setEmail(

                                    e.target.value

                                )

                            }

                            required

                        />

                    </Form.Group>

                    <Button

                        type="submit"

                        variant="warning"

                        className="w-100"

                        disabled={loading}

                    >

                        {

                            loading

                                ?

                                (

                                    isEnglish

                                        ?

                                        "Searching..."

                                        :

                                        "جاري البحث..."

                                )

                                :

                                (

                                    isEnglish

                                        ?

                                        "Find Reservation"

                                        :

                                        "البحث عن الحجز"

                                )

                        }

                    </Button>

                </Form>

            </Card.Body>

        </Card>

    );

};

export default CustomerLookup;