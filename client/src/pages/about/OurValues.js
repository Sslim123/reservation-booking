import {
    Container,
    Row,
    Col,
    Card
} from "react-bootstrap";

import {
    FaHeart,
    FaShieldAlt,
    FaStar,
    FaHandsHelping
} from "react-icons/fa";

function OurValues({ isEnglish }) {

    const values = [

        {
            icon: <FaHeart size={42} />,
            title: isEnglish
                ? "Guest First"
                : "الضيف أولاً",

            description: isEnglish
                ? "Every decision we make begins with delivering an exceptional guest experience."
                : "كل قرار نتخذه يبدأ بتقديم تجربة استثنائية لضيوفنا."
        },

        {
            icon: <FaStar size={42} />,
            title: isEnglish
                ? "Quality"
                : "الجودة",

            description: isEnglish
                ? "We maintain high standards across our rooms, facilities and services."
                : "نحافظ على أعلى معايير الجودة في الغرف والمرافق والخدمات."
        },

        {
            icon: <FaShieldAlt size={42} />,
            title: isEnglish
                ? "Trust & Security"
                : "الثقة والأمان",

            description: isEnglish
                ? "Your comfort, privacy and secure booking experience always come first."
                : "راحتك وخصوصيتك وتجربة الحجز الآمنة هي أولويتنا دائماً."
        },

        {
            icon: <FaHandsHelping size={42} />,
            title: isEnglish
                ? "Hospitality"
                : "الضيافة",

            description: isEnglish
                ? "Friendly service with genuine care that makes every guest feel at home."
                : "خدمة ودودة وضيافة حقيقية تجعل كل ضيف يشعر وكأنه في منزله."
        }

    ];

    return (

        <section className="py-5 bg-light">

            <Container>

                <div className="text-center mb-5">

                    <span className="text-warning fw-bold text-uppercase">

                        {

                            isEnglish

                                ? "OUR VALUES"

                                : "قيمنا"

                        }

                    </span>

                    <h2 className="fw-bold display-6 mt-2">

                        {

                            isEnglish

                                ? "What Defines VISTARA"

                                : "ما الذي يميز VISTARA"

                        }

                    </h2>

                    <p className="text-muted">

                        {

                            isEnglish

                                ? "Our values shape every stay and every guest experience."

                                : "قيمنا هي الأساس الذي نبني عليه كل تجربة إقامة."

                        }

                    </p>

                </div>

                <Row className="g-4">

                    {

                        values.map((value, index) => (

                            <Col
                                lg={3}
                                md={6}
                                key={index}
                            >

                                <Card className="value-card border-0 shadow-sm h-100 text-center">

                                    <Card.Body className="p-4">

                                        <div className="text-warning mb-4">

                                            {value.icon}

                                        </div>

                                        <h5 className="fw-bold mb-3">

                                            {value.title}

                                        </h5>

                                        <p className="text-muted small">

                                            {value.description}

                                        </p>

                                    </Card.Body>

                                </Card>

                            </Col>

                        ))

                    }

                </Row>

            </Container>

            <style>{`

                .value-card{

                    border-radius:18px;

                    transition:.3s;

                }

                .value-card:hover{

                    transform:translateY(-8px);

                    box-shadow:0 1rem 3rem rgba(0,0,0,.15)!important;

                }

            `}</style>

        </section>

    );

}

export default OurValues;