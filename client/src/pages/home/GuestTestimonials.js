import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function GuestTestimonials({ isEnglish }) {

    const reviews = [

        {
            name: "Sarah Johnson",
            location: "United Kingdom",
            rating: 5,
            comment_en:
                "Fantastic experience from check-in to check-out. The rooms were spotless and the staff were incredibly welcoming.",

            comment_ar:
                "تجربة رائعة منذ تسجيل الوصول وحتى المغادرة. كانت الغرف نظيفة للغاية وكان فريق العمل ودوداً للغاية."
        },

        {
            name: "Ahmed Hassan",
            location: "United Arab Emirates",
            rating: 5,
            comment_en:
                "Excellent hospitality, comfortable rooms and outstanding service. I will definitely return.",

            comment_ar:
                "ضيافة ممتازة وغرف مريحة وخدمة رائعة. سأعود بالتأكيد مرة أخرى."
        },

        {
            name: "Emily Carter",
            location: "Canada",
            rating: 5,
            comment_en:
                "Beautiful hotel, peaceful atmosphere and an amazing breakfast. Highly recommended.",

            comment_ar:
                "فندق جميل وأجواء هادئة وإفطار رائع. أوصي به بشدة."
        }

    ];

    return (

        <section className="py-5 bg-white">

            <Container>

                <div className="text-center mb-5">

                    <h2 className="fw-bold">

                        {

                            isEnglish

                                ? "What Our Guests Say"

                                : "ماذا يقول ضيوفنا"

                        }

                    </h2>

                    <p className="text-muted">

                        {

                            isEnglish

                                ? "Real experiences from guests who stayed with us."

                                : "تجارب حقيقية من ضيوف أقاموا لدينا."

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

                        reviews.map((review, index) => (

                            <Col
                                lg={4}
                                md={6}
                                key={index}
                            >

                                <Card className="border-0 shadow-sm h-100 testimonial-card animate-card fade-section">

                                    <Card.Body className="p-4">

                                        <FaQuoteLeft
                                            className="text-warning mb-3"
                                            size={28}
                                        />

                                        <div className="mb-3">

                                            {

                                                [...Array(review.rating)].map((_, i) => (

                                                    <FaStar
                                                        key={i}
                                                        className="text-warning me-1"
                                                    />

                                                ))

                                            }{isEnglish ? "Guest Rating" : "تقييم الضيف"} {review.rating}/5

                                        </div>

                                        <p className="text-muted">

                                            {

                                                isEnglish

                                                    ? review.comment_en

                                                    : review.comment_ar

                                            }

                                        </p>

                                        <hr />

                                        <h6 className="fw-bold mb-1">

                                            {review.name}

                                        </h6>

                                        <small className="text-muted">

                                            {review.location}

                                        </small>

                                    </Card.Body>

                                </Card>

                            </Col>

                        ))

                    }

                </Row>

            </Container>

            <style>{`

                .testimonial-card{

                    border-radius:18px;

                    transition:.3s;

                }

                .testimonial-card:hover{

                    transform:translateY(-8px);

                    box-shadow:0 1rem 3rem rgba(0,0,0,.12)!important;

                }

            `}</style>

        </section>

    );

}

export default GuestTestimonials;