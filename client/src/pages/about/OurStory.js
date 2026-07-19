import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

import HotelStoryImage from "../../images/images4.jpg";

function OurStory({ isEnglish }) {

    return (

        <section className="py-5 bg-white">

            <Container>

                <Row className="align-items-center g-5">
                    <Col lg={6}>

                        <img
                            src={HotelStoryImage}
                            alt="VISTARA"
                            className="img-fluid rounded-4 shadow-lg w-100 animate-image"
                            style={{
                                height: "500px",
                                objectFit: "cover"
                            }}
                        />

                    </Col>
                    <Col lg={6}>

                        <span className="text-warning fw-bold text-uppercase">

                            {

                                isEnglish

                                    ? "OUR STORY"

                                    : "قصتنا"

                            }

                        </span>

                        <h2 className="fw-bold display-6 mt-3 mb-4">

                            {

                                isEnglish

                                    ? "Creating Exceptional Hotel Experiences"

                                    : "نصنع تجارب إقامة استثنائية"

                            }

                        </h2>

                        <p className="text-muted lh-lg">

                            {

                                isEnglish

                                    ?

                                    "VISTARA was created with one simple vision: to provide guests with comfortable accommodation, modern facilities and genuine hospitality. Every detail of our hotel is carefully designed to make every stay relaxing, enjoyable and memorable."

                                    :

                                    "تم إنشاء VISTARA برؤية بسيطة، وهي توفير إقامة مريحة، ومرافق حديثة، وضيافة حقيقية لجميع الضيوف. لقد تم تصميم كل تفاصيل الفندق بعناية لتوفير تجربة إقامة مريحة وممتعة لا تُنسى."

                            }

                        </p>

                        <p className="text-muted lh-lg">

                            {

                                isEnglish

                                    ?

                                    "Whether you are travelling for business, enjoying a family holiday or celebrating a special occasion, our dedicated team is committed to delivering outstanding service from the moment you arrive until the day you leave."

                                    :

                                    "سواء كنت مسافراً للعمل، أو تستمتع بعطلة عائلية، أو تحتفل بمناسبة خاصة، فإن فريقنا ملتزم بتقديم خدمة استثنائية منذ لحظة وصولك وحتى مغادرتك."

                            }

                        </p>

                        <div className="mt-4">

                            <div className="d-flex align-items-center mb-3">

                                <FaCheckCircle className="text-warning me-3" />

                                <span>

                                    {

                                        isEnglish

                                            ? "Modern rooms designed for every traveller."

                                            : "غرف حديثة تناسب جميع أنواع المسافرين."

                                    }

                                </span>

                            </div>

                            <div className="d-flex align-items-center mb-3">

                                <FaCheckCircle className="text-warning me-3" />

                                <span>

                                    {

                                        isEnglish

                                            ? "Professional hospitality and personalised service."

                                            : "ضيافة احترافية وخدمة شخصية متميزة."

                                    }

                                </span>

                            </div>

                            <div className="d-flex align-items-center mb-3">

                                <FaCheckCircle className="text-warning me-3" />

                                <span>

                                    {

                                        isEnglish

                                            ? "Safe, secure and simple booking experience."

                                            : "تجربة حجز آمنة وسهلة وموثوقة."

                                    }

                                </span>

                            </div>

                            <div className="d-flex align-items-center">

                                <FaCheckCircle className="text-warning me-3" />

                                <span>

                                    {

                                        isEnglish

                                            ? "Committed to exceeding guest expectations."

                                            : "ملتزمون بتجاوز توقعات ضيوفنا."

                                    }

                                </span>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default OurStory;