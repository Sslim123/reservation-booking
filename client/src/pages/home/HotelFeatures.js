import {
    Container,
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";

import {
    FaBed,
    FaUtensils,
    FaSpa,
    FaWifi,
    FaArrowRight
} from "react-icons/fa";

import { Link } from "react-router-dom";

function HotelFeatures({ isEnglish }) {

    const features = [

        {
            icon: <FaBed size={42} />,
            title: isEnglish ? "Luxury Rooms" : "غرف فاخرة",
            description: isEnglish
                ? "Elegant rooms designed for comfort, relaxation and memorable stays."
                : "غرف أنيقة مصممة لتوفير الراحة والاسترخاء وإقامة لا تنسى."
        },

        {
            icon: <FaUtensils size={42} />,
            title: isEnglish ? "Complimentary Breakfast" : "إفطار مجاني",
            description: isEnglish
                ? "Start every morning with a delicious breakfast prepared by our chefs."
                : "ابدأ يومك بإفطار لذيذ يتم إعداده يومياً بواسطة طهاتنا."
        },

        {
            icon: <FaSpa size={42} />,
            title: isEnglish ? "Wellness & Leisure" : "السبا والاستجمام",
            description: isEnglish
                ? "Relax with our spa, swimming pool and modern fitness facilities."
                : "استمتع بالاسترخاء في السبا والمسبح وصالة اللياقة البدنية."
        },

        {
            icon: <FaWifi size={42} />,
            title: isEnglish ? "Free High-Speed Wi-Fi" : "واي فاي مجاني",
            description: isEnglish
                ? "Stay connected everywhere with complimentary high-speed internet."
                : "ابق على اتصال طوال إقامتك مع الإنترنت المجاني عالي السرعة."
        }

    ];

    return (

        <section className="py-5 bg-light">

            <Container>

                <div className="text-center mb-5">

                    <h2 className="fw-bold">

                        {

                            isEnglish

                                ? "Why Choose VISTARA?"

                                : "لماذا تختار VISTARA؟"

                        }

                    </h2>

                    <p className="text-muted">

                        {

                            isEnglish

                                ? "Everything you need for a comfortable, secure and memorable stay."

                                : "كل ما تحتاجه لإقامة مريحة وآمنة لا تنسى."

                        }

                    </p>

                    <div
                        className="bg-warning mx-auto rounded"
                        style={{
                            width: "70px",
                            height: "4px"
                        }}
                    />

                </div>

                <Row className="g-4">

                    {

                        features.map((feature, index) => (

                            <Col
                                key={index}
                                xs={12}
                                sm={6}
                                lg={3}
                            >

                                <Card className="border-0 shadow-sm h-100 text-center feature-card animate-card fade-section">

                                    <Card.Body className="p-4">

                                        <div className="text-warning mb-4 animate-icon">

                                            {feature.icon}

                                        </div>

                                        <h5 className="fw-bold mb-3">

                                            {feature.title}

                                        </h5>

                                        <p className="text-muted small">

                                            {feature.description}

                                        </p>

                                    </Card.Body>

                                </Card>

                            </Col>

                        ))

                    }

                </Row>

                <Row className="mt-5">

                    <Col>

                        <div className="bg-dark text-white rounded-4 p-5 text-center shadow">

                            <h3 className="fw-bold mb-3">

                                {

                                    isEnglish

                                        ? "Ready to Book Your Stay?"

                                        : "هل أنت مستعد لحجز إقامتك؟"

                                }

                            </h3>

                            <p className="mb-4">

                                {

                                    isEnglish

                                        ? "Browse available rooms, discover exclusive offers and complete your reservation in minutes."

                                        : "تصفح الغرف المتاحة، واكتشف العروض الحصرية، وأكمل حجزك خلال دقائق."

                                }

                            </p>

                            <Link to="/booking">

                                <Button
                                    variant="warning"
                                    size="lg"
                                    className="fw-bold px-4"
                                >

                                    {

                                        isEnglish

                                            ? "Book Your Stay"

                                            : "احجز الآن"

                                    }

                                    <FaArrowRight className="ms-2" />

                                </Button>

                            </Link>

                        </div>

                    </Col>

                </Row>

            </Container>

            <style>{`

                .feature-card{

                    transition:.3s;

                    border-radius:18px;

                }

                .feature-card:hover{

                    transform:translateY(-8px);

                    box-shadow:0 1rem 3rem rgba(0,0,0,.15)!important;

                }

            `}</style>

        </section>

    );

}

export default HotelFeatures;