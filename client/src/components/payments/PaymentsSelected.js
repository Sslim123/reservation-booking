import { useEffect, useMemo, useState } from "react";
import { Card, Row, Col, Table, Form, Badge, Button } from "react-bootstrap";
const PaymentsSelected = ({selectedPayment, setSelectedPayment, t,isEnglish}) => {
    return (
        <div>

            {
                selectedPayment && (

                    <Card className="mt-4 shadow border-0 rounded-4">

                        <Card.Header className="bg-dark text-white fw-bold">

                            {t.details}

                        </Card.Header>

                        <Card.Body>

                            <Row>

                                <Col md={6}>

                                    <h6 className="text-primary mb-3">

                                        {t.bookingInformation}

                                    </h6>

                                    <p>

                                        <strong>{t.booking}:</strong>{" "}

                                        {selectedPayment.bookings?.booking_reference}

                                    </p>

                                    <p>

                                        <strong>{t.guest}:</strong>{" "}

                                        {selectedPayment.bookings?.first_name}{" "}

                                        {selectedPayment.bookings?.last_name}

                                    </p>

                                </Col>

                                <Col md={6}>

                                    <h6 className="text-success mb-3">

                                        {t.paymentInformation}

                                    </h6>

                                    <p>

                                        <strong>{t.amount}:</strong>

                                        £{selectedPayment.amount}

                                    </p>

                                    <p>

                                        <strong>{t.currency}:</strong>

                                        {selectedPayment.currency}

                                    </p>

                                    <p>

                                        <strong>{t.method}:</strong>

                                        {selectedPayment.payment_method}

                                    </p>

                                    <p>

                                        <strong>{t.status}:</strong>

                                        <Badge bg="success">

                                            {selectedPayment.payment_status}

                                        </Badge>

                                    </p>

                                    <p>

                                        <strong>{t.reference}:</strong>

                                        {selectedPayment.reference_number || "-"}

                                    </p>

                                </Col>

                            </Row>

                            <hr />

                            <Row>

                                <Col md={6}>

                                    <h6 className="text-secondary">

                                        {t.staffInformation}

                                    </h6>

                                    <p>

                                        {

                                            selectedPayment.staff

                                                ?

                                                `${selectedPayment.staff.first_name}

${selectedPayment.staff.last_name}`

                                                :

                                                "-"

                                        }

                                    </p>

                                </Col>

                                <Col md={6}>

                                    <h6 className="text-secondary">

                                        {t.notes}

                                    </h6>

                                    <p>

                                        {

                                            selectedPayment.notes ||

                                            "-"

                                        }

                                    </p>

                                </Col>

                            </Row>

                            <hr />

                            <div className="text-end">

                                <Button

                                    variant="danger"

                                    onClick={() => setSelectedPayment(null)}

                                >

                                    {t.close}

                                </Button>

                            </div>

                        </Card.Body>

                    </Card>

                )
            }
        </div>
    );
}
export default PaymentsSelected;