import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

function OurPromise({ isEnglish }) {

    return (

        <section
            className="py-5"
            style={{
                background: "#212529"
            }}
        >

            <Container>

                <Row className="justify-content-center text-center">

                    <Col lg={8}>

                        <div
                            className="text-warning mb-4"
                            style={{
                                fontSize: "3rem"
                            }}
                        >

                            <FaHeart />

                        </div>

                        <span className="text-warning fw-bold text-uppercase">

                            {

                                isEnglish

                                    ? "OUR PROMISE"

                                    : "وعدنا"

                            }

                        </span>

                        <h2
                            className="fw-bold text-white mt-3 mb-4"
                            style={{
                                fontSize: "2.7rem"
                            }}
                        >

                            {

                                isEnglish

                                    ? "Every Stay Matters"

                                    : "كل إقامة لها قيمة"

                            }

                        </h2>

                        <p
                            className="text-light mx-auto"
                            style={{
                                maxWidth: "760px",
                                lineHeight: "2",
                                fontSize: "1.1rem"
                            }}
                        >

                            {

                                isEnglish

                                    ?

                                    "At VISTARA, hospitality is more than a service—it is our commitment. From the moment you arrive until the day you leave, our team is dedicated to providing comfort, quality and genuine care that transforms every visit into a memorable experience."

                                    :

                                    "في VISTARA نؤمن بأن الضيافة ليست مجرد خدمة، بل هي وعد نقدمه لكل ضيف. منذ لحظة وصولك وحتى مغادرتك، يلتزم فريقنا بتوفير الراحة والجودة والاهتمام الحقيقي لتحويل كل إقامة إلى تجربة لا تُنسى."

                            }

                        </p>

                        <hr
                            className="border-secondary my-5"
                        />

                        <Row>

                            <Col md={4}>

                                <h3 className="text-warning fw-bold">

                                    24/7

                                </h3>

                                <p className="text-light">

                                    {

                                        isEnglish

                                            ? "Guest Support"

                                            : "دعم الضيوف"

                                    }

                                </p>

                            </Col>

                            <Col md={4}>

                                <h3 className="text-warning fw-bold">

                                    100%

                                </h3>

                                <p className="text-light">

                                    {

                                        isEnglish

                                            ? "Secure Booking"

                                            : "حجز آمن"

                                    }

                                </p>

                            </Col>

                            <Col md={4}>

                                <h3 className="text-warning fw-bold">

                                    ★★★★★

                                </h3>

                                <p className="text-light">

                                    {

                                        isEnglish

                                            ? "Exceptional Hospitality"

                                            : "ضيافة استثنائية"

                                    }

                                </p>

                            </Col>

                        </Row>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default OurPromise;