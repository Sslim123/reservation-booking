import { Container, Row, Col, Card } from "react-bootstrap";

import {
    FaTags,
    FaShieldAlt,
    FaClock,
    FaCreditCard
} from "react-icons/fa";

function WhyBookDirect({ isEnglish }) {

    const benefits = [

        {

            icon: <FaTags />,

            title: isEnglish
                ? "Best Price Guarantee"
                : "أفضل سعر مضمون",

            description: isEnglish
                ? "Book directly with us and enjoy competitive prices with no hidden fees."
                : "احجز مباشرة معنا واستمتع بأفضل الأسعار بدون أي رسوم مخفية."

        },

        {

            icon: <FaShieldAlt />,

            title: isEnglish
                ? "Secure Reservation"
                : "حجز آمن",

            description: isEnglish
                ? "Your booking and personal information are protected from start to finish."
                : "بياناتك الشخصية وحجزك محميان بالكامل طوال عملية الحجز."

        },

        {

            icon: <FaClock />,

            title: isEnglish
                ? "Instant Confirmation"
                : "تأكيد فوري",

            description: isEnglish
                ? "Receive confirmation immediately after completing your reservation."
                : "احصل على تأكيد حجزك مباشرة بعد إكمال عملية الحجز."

        },

        {

            icon: <FaCreditCard />,

            title: isEnglish
                ? "Flexible Payment"
                : "خيارات دفع مرنة",

            description: isEnglish
                ? "Pay online or choose to pay when you arrive at the hotel."
                : "ادفع إلكترونياً أو اختر الدفع عند الوصول إلى الفندق."

        }

    ];

    return (

        <section className="py-5 bg-light">

            <Container>

                <div className="text-center mb-5">

                    <span className="text-warning fw-bold text-uppercase">

                        {

                            isEnglish

                                ? "WHY BOOK DIRECT"

                                : "لماذا تحجز مباشرة؟"

                        }

                    </span>

                    <h2 className="fw-bold mt-2">

                        {

                            isEnglish

                                ? "Book Direct With Confidence"

                                : "احجز مباشرة بكل ثقة"

                        }

                    </h2>

                    <p className="text-muted">

                        {

                            isEnglish

                                ? "Enjoy exclusive benefits available only when booking through VISTARA."

                                : "استمتع بمزايا حصرية متوفرة فقط عند الحجز مباشرة عبر VISTARA."

                        }

                    </p>

                    <div
                        className="bg-warning mx-auto mt-3"
                        style={{
                            width: "70px",
                            height: "4px",
                            borderRadius: "10px"
                        }}
                    />

                </div>

                <Row className="g-4">

                    {

                        benefits.map((item, index) => (

                            <Col
                                lg={3}
                                md={6}
                                key={index}
                            >

                                <Card className="h-100 border-0 shadow-sm text-center animate-card">

                                    <Card.Body className="p-4">

                                        <div
                                            className="text-warning mb-3 animate-icon"
                                            style={{
                                                fontSize: "2.4rem"
                                            }}
                                        >

                                            {item.icon}

                                        </div>

                                        <h5 className="fw-bold mb-3">

                                            {item.title}

                                        </h5>

                                        <p className="text-muted small mb-0">

                                            {item.description}

                                        </p>

                                    </Card.Body>

                                </Card>

                            </Col>

                        ))

                    }

                </Row>

            </Container>

        </section>

    );

}

export default WhyBookDirect;