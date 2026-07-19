import { Container, Row, Col } from "react-bootstrap";

import {
    FaShieldAlt,
    FaTag,
    FaCheckCircle,
    FaCreditCard
} from "react-icons/fa";

function TrustStrip({ isEnglish }) {

    const items = [

        {
            icon: <FaTag />,
            title: isEnglish
                ? "Best Price Guarantee"
                : "أفضل سعر مضمون",

            text: isEnglish
                ? "Competitive rates with no hidden fees."
                : "أسعار تنافسية بدون أي رسوم مخفية."
        },

        {
            icon: <FaShieldAlt />,
            title: isEnglish
                ? "Secure Booking"
                : "حجز آمن",

            text: isEnglish
                ? "Your personal information is protected."
                : "بياناتك الشخصية محمية بالكامل."
        },

        {
            icon: <FaCheckCircle />,
            title: isEnglish
                ? "Instant Confirmation"
                : "تأكيد فوري",

            text: isEnglish
                ? "Receive your reservation immediately."
                : "احصل على تأكيد الحجز مباشرة."
        },

        {
            icon: <FaCreditCard />,
            title: isEnglish
                ? "Pay at Hotel"
                : "الدفع عند الوصول",

            text: isEnglish
                ? "Choose online payment or pay on arrival."
                : "يمكنك الدفع إلكترونياً أو عند الوصول."
        }

    ];

    return (

        <section className="py-4 bg-white border-bottom">

            <Container>

                <Row className="g-4">

                    {

                        items.map((item, index) => (

                            <Col
                                lg={3}
                                md={6}
                                key={index}
                            >

                                <div className="trust-item text-center">

                                    <div className="trust-icon mb-3">

                                        {item.icon}

                                    </div>

                                    <h6 className="fw-bold">

                                        {item.title}

                                    </h6>

                                    <small className="text-muted">

                                        {item.text}

                                    </small>

                                </div>

                            </Col>

                        ))

                    }

                </Row>

            </Container>

            <style>{`

                .trust-item{

                    transition:.3s;

                    padding:10px;

                }

                .trust-item:hover{

                    transform:translateY(-5px);

                }

                .trust-icon{

                    font-size:2rem;

                    color:#FFC107;

                }

            `}</style>

        </section>

    );

}

export default TrustStrip;