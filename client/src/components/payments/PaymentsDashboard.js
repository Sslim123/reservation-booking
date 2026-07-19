import { useEffect, useMemo, useState } from "react";
import { Card, Row, Col, Table, Form, Badge, Button } from "react-bootstrap";
import PaymentsSelected from "./PaymentsSelected";
const PaymentsDashboard = ({ isEnglish }) => {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [payments, setPayments] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("ALL");

    const loadPayments = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${process.env.REACT_APP_LOCAL_HOST}/api/payments`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (result.success) {

                setPayments(result.payments);

            }

        }
        catch (error) {

            console.error(error);

        }
        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadPayments();

    }, []);

    const filteredPayments = useMemo(() => {

        const value = search.toLowerCase();

        return payments.filter(payment =>

            payment.bookings?.booking_reference?.toLowerCase().includes(value) ||

            payment.bookings?.first_name?.toLowerCase().includes(value) ||

            payment.bookings?.last_name?.toLowerCase().includes(value) ||

            payment.reference_number?.toLowerCase().includes(value)

        );

    }, [payments, search]);

    const statistics = useMemo(() => {

        return {

            totalPayments: payments.length,

            totalRevenue: payments.reduce(

                (sum, payment) =>

                    sum + Number(payment.amount),

                0

            ),

            cash: payments.filter(

                p => p.payment_method === "CASH"

            ).length,

            card: payments.filter(

                p => p.payment_method === "CARD"

            ).length,

            bank: payments.filter(

                p => p.payment_method === "BANK_TRANSFER"

            ).length

        };

    }, [payments]);

    const t = {

        title: isEnglish ? "Payments" : "المدفوعات",

        totalPayments: isEnglish ? "Payments" : "عدد المدفوعات",

        totalRevenue: isEnglish ? "Revenue" : "إجمالي الإيرادات",

        cash: isEnglish ? "Cash" : "نقداً",

        card: isEnglish ? "Card" : "بطاقة",

        bank: isEnglish ? "Bank Transfer" : "تحويل بنكي",

        search: isEnglish

            ? "Search by booking, guest or reference..."

            : "ابحث برقم الحجز أو اسم الضيف أو المرجع...",

        booking: isEnglish ? "Booking" : "الحجز",

        guest: isEnglish ? "Guest" : "الضيف",

        amount: isEnglish ? "Amount" : "المبلغ",

        method: isEnglish ? "Method" : "طريقة الدفع",

        status: isEnglish ? "Status" : "الحالة",

        reference: isEnglish ? "Reference" : "المرجع",

        receivedBy: isEnglish ? "Received By" : "استلم بواسطة",

        paidAt: isEnglish ? "Paid At" : "تاريخ الدفع",

        action: isEnglish ? "Action" : "الإجراء",

        view: isEnglish ? "View" : "عرض",
        details: isEnglish ? "Payment Details" : "تفاصيل الدفعة",

        bookingInformation: isEnglish ? "Booking Information" : "بيانات الحجز",

        guestInformation: isEnglish ? "Guest Information" : "بيانات الضيف",

        paymentInformation: isEnglish ? "Payment Information" : "بيانات الدفع",

        staffInformation: isEnglish ? "Received By" : "تم الاستلام بواسطة",

        currency: isEnglish ? "Currency" : "العملة",

        close: isEnglish ? "Close" : "إغلاق",

        notes: isEnglish ? "Notes" : "ملاحظات"

    };
// const filteredPayments = payments.filter(payment => {

//     const searchMatch = "";

//     const methodMatch =   filter==="ALL"   ||

//         payment.payment_method===filter;

//     return searchMatch && methodMatch;

// });
    return (

        <div
            className="container-fluid px-4 mt-4"
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
        >

            <Row className="g-3 mb-4">

                <Col md={3}>

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <h3>{statistics.totalPayments}</h3>

                            <small>{t.totalPayments}</small>

                        </Card.Body>

                    </Card>

                </Col>

                <Col md={3}>

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <h3>

                                £{statistics.totalRevenue.toFixed(2)}

                            </h3>

                            <small>{t.totalRevenue}</small>

                        </Card.Body>

                    </Card>

                </Col>

                <Col md={3}>

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <h3>{statistics.cash}</h3>

                            <small>{t.cash}</small>

                        </Card.Body>

                    </Card>

                </Col>

                <Col md={3}>

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <h3>

                                {statistics.card + statistics.bank}

                            </h3>

                            <small>

                                {isEnglish

                                    ? "Electronic"

                                    : "إلكتروني"}

                            </small>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

            <Form.Control

                className="mb-4"

                placeholder={t.search}

                value={search}

                onChange={(e) =>

                    setSearch(e.target.value)

                }

            />
            <Button
                size="sm"
                variant={filter === "ALL" ? "dark" : "outline-dark"}
            >
                All
            </Button>

            <Button
                size="sm"
                variant={filter === "CASH" ? "success" : "outline-success"}
            >
                Cash
            </Button>

            <Button
                size="sm"
                variant={filter === "CARD" ? "primary" : "outline-primary"}
            >
                Card
            </Button>

            <Button
                size="sm"
                variant={filter === "BANK_TRANSFER" ? "warning" : "outline-warning"}
            >
                Bank Transfer
            </Button>
            <div className="table-responsive">

                <Table
                    hover
                    striped
                    bordered
                    className="align-middle text-center"
                >

                    <thead className="table-dark">

                        <tr>

                            <th>{t.booking}</th>

                            <th>{t.guest}</th>

                            <th>{t.amount}</th>

                            <th>{t.method}</th>

                            <th>{t.status}</th>

                            <th>{t.reference}</th>

                            <th>{t.receivedBy}</th>

                            <th>{t.paidAt}</th>

                            <th>{t.action}</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            loading ?

                                (

                                    <tr>

                                        <td colSpan="9">

                                            Loading...

                                        </td>

                                    </tr>

                                )

                                :

                                filteredPayments.map(payment => (

                                    <tr key={payment.id}>

                                        <td>

                                            {

                                                payment.bookings

                                                    ?.booking_reference

                                            }

                                        </td>

                                        <td>

                                            {

                                                payment.bookings

                                                    ?.first_name

                                            }{" "}

                                            {

                                                payment.bookings

                                                    ?.last_name

                                            }

                                        </td>

                                        <td>

                                            £{payment.amount}

                                        </td>

                                        <td>

                                            {payment.payment_method}

                                        </td>

                                        <td>

                                            <Badge bg="success">

                                                {

                                                    payment.payment_status

                                                }

                                            </Badge>

                                        </td>

                                        <td>

                                            {

                                                payment.reference_number ||

                                                "-"

                                            }

                                        </td>

                                        <td>

                                            {

                                                payment.staff

                                                    ?

                                                    `${payment.staff.first_name} ${payment.staff.last_name}`

                                                    :

                                                    "-"

                                            }

                                        </td>

                                        <td>

                                            {

                                                payment.paid_at

                                                    ?

                                                    new Date(

                                                        payment.paid_at

                                                    ).toLocaleDateString()

                                                    :

                                                    "-"

                                            }

                                        </td>

                                        <td>

                                            <Button

                                                size="sm"

                                                variant="primary"
                                                onClick={() => setSelectedPayment(payment)}
                                            >

                                                {t.view}

                                            </Button>

                                        </td>

                                    </tr>

                                ))

                        }

                    </tbody>

                </Table>

            </div>
            <PaymentsSelected setSelectedPayment={setSelectedPayment} t={t} isEnglish={isEnglish} selectedPayment={selectedPayment} />
        </div>

    );

};

export default PaymentsDashboard;