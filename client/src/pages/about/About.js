import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Card from "react-bootstrap/Card";

import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import Modal from "../../components/Modules";
import OurStory from "./OurStory";
import OurValues from"./OurValues";
import OurPromise from "./OurPromise";
const About = ({ isEnglish, setIsEnglish, toggleLanguage }) => {

  const features = [
    {
      title: isEnglish ? "Who We Are" : "من نحن",
      desc: isEnglish
        ? "Experience the best of your destination with curated premium attractions, historical tours, guided local activities, and unforgettable experiences tailored just for your stay."
        : "اختبر أفضل ما في وجهتك من خلال مناطق الجذب المتميزة، والجولات التاريخية الموجهة، والأنشطة المحلية، والتجارب التي لا تُنسى المصممة خصيصًا لإقامتك.",
      icon: "🏨" 
    },
    {
      title: isEnglish ? "What We Offer" : "ماذا نقدم",
      desc: isEnglish
        ? "Find the perfect luxury holiday rental for your trip. From high-end hotel suites and boutique apartments to scenic coastal villas, we offer premium accommodations globally."
        : "اعثر على العقار المثالي لقضاء عطلتك. من أجنحة الفنادق الفاخرة والشقق المتميزة إلى الفيلات الساحلية ذات الإطلالات الخلابة، نقدم أماكن إقامة راقية عالميًا.",
      icon: "✨"
    },
    {
      title: isEnglish ? "Why Choose Us" : "لماذا تختارنا",
      desc: isEnglish
        ? "Enjoy complete peace of mind with instant confirmations, flexible booking modification rules, and secure cancellation options across all our luxury holiday homes."
        : "استمتع براحة بال تامة مع تأكيدات فورية، وخيارات تعديل مرنة، وإمكانية الإلغاء الآمن عبر جميع منازل العطلات الفاخرة لدينا.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light" dir={isEnglish ? "ltr" : "rtl"}>
      <Heading isEnglish={isEnglish} setIsEnglish={setIsEnglish} />

      <section
        className="about-hero d-flex align-items-center text-white"
      >

        <div className="about-overlay"></div>

        <Container className="position-relative">

          <Row className="justify-content-center text-center">

            <Col lg={8}>

              <span className="about-badge ">

                {

                  isEnglish

                    ? "WELCOME TO VISTARA"

                    : "مرحباً بكم في VISTARA"

                }

              </span>

              <h1 className="about-title mt-3 fade-section">

                {

                  isEnglish

                    ? "More Than a Hotel"

                    : "أكثر من مجرد فندق"

                }

              </h1>

              <p className="about-subtitle fade-section">

                {

                  isEnglish

                    ?

                    "At VISTARA, every stay is built around comfort, quality and genuine hospitality. Whether you're travelling for business or leisure, we are committed to making your experience exceptional from arrival to departure."

                    :

                    "في VISTARA نؤمن بأن كل إقامة يجب أن تجمع بين الراحة والجودة والضيافة الحقيقية. سواء كنت مسافراً للعمل أو للاستجمام، فإننا نسعى لجعل تجربتك مميزة منذ لحظة وصولك وحتى مغادرتك."

                }

              </p>

            </Col>

          </Row>

        </Container>

      </section>


      {/* <section className="container pb-5">
        <div className="row g-4 justify-content-center">
          {features.map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center bg-white rounded-3 d-flex flex-column justify-content-between">
                <div>
                  <div className="fs-1 mb-3 text-warning bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: "70px", height: "70px" }}>
                    {item.icon}
                  </div>

                  <h4 className="fw-bold text-dark mb-3">
                    {item.title}
                  </h4>

                  <p className="text-muted small lh-base mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <Modal isEnglish={isEnglish} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

        <OurStory isEnglish={isEnglish}/>
                <OurValues isEnglish={isEnglish}/>
                <OurPromise isEnglish={isEnglish}/>

      <Footer />
    </div>
  );
};

export default About;
