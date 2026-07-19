import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Img2 from "../../images/images5.jpeg";
function Hero({ isEnglish }) {

    const t = {

        badge: isEnglish
            ? "WELCOME TO VISTARA"
            : "مرحباً بك في VISTARA",

        title: isEnglish
            ? "Experience Comfort"
            : "استمتع بإقامة",

        highlight: isEnglish
            ? "Beyond Expectations"
            : "تفوق توقعاتك",

        description: isEnglish
            ? "Luxury accommodation, exclusive offers and exceptional hospitality designed to make every stay memorable."
            : "إقامة فاخرة، وعروض حصرية، وضيافة استثنائية مصممة لتجعل كل إقامة تجربة لا تُنسى.",

        booking: isEnglish
            ? "Book Your Stay"
            : "احجز الآن",

        offers: isEnglish
            ? "Explore Offers"
            : "استكشف العروض"

    };

    return (

        <section
            className="hero-section d-flex align-items-center"
            style={{
                backgroundImage: `url(${Img2})`
            }}
        >

            <div className="hero-overlay" />

            <Container className="position-relative">

                <Row
                    className={
                        isEnglish
                            ? "justify-content-start"
                            : "justify-content-end"
                    }
                >

                    <Col lg={6}>

                        <span className="hero-badge">

                            {t.badge}

                        </span>

                        <h1 className="hero-title fade-section mt-3">

                            {t.title}

                            <br />

                            <span className="text-warning">

                                {t.highlight}

                            </span>

                        </h1>

                        <p className="hero-description fade-section">

                            {t.description}

                        </p>

                        <div className="d-flex flex-wrap gap-3 mt-4 fade-section">

                            <Link to="/booking">

                                <Button 
                                    variant="warning"
                                    size="lg"
                                    className="px-4 fw-bold animate-btn"
                                >

                                    {t.booking}

                                </Button>

                            </Link>

                            <Link to="/offers">

                                <Button 
                                    variant="outline-light"
                                    size="lg"
                                    className="px-4 fw-bold  animate-btn"
                                >

                                    {t.offers}

                                </Button>

                            </Link>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default Hero;