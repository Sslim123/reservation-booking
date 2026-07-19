import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Imgs1 from "../images/hotelGlasgow1.jpg";
import Imgs2 from "../images/hotelGlasgow2.jpg";
import Imgs3 from "../images/hotelGlasgow3.jpeg";
import Imgs4 from "../images/london11.jpg";
import Imgs5 from "../images/london2.jpeg";
import Imgs6 from "../images/london33.jpg";
import Imgs7 from "../images/manchester1.jpg";
import Imgs8 from "../images/manchester31.jpg";
import Imgs9 from "../images/manchester3.jpg";



export default function PlacesToVisit({ isEnglish }) {
  const content = [
    {
      city: isEnglish ? "Glasgow" : "غلاسكو",
      desc: isEnglish ? "Whether you’re seeking culture, nightlife, history..." : "سواء كنت تبحث عن الثقافة، الحياة الليلية، التاريخ...",
      link: "https://peoplemakeglasgow.com/",
      places: [
        { name: isEnglish ? "George square, Glasgow" : "ساحة جورج، غلاسكو", img: Imgs1 },
        { name: isEnglish ? "Clyde bridge, Glasgow" : "جسر كلايد، غلاسكو", img: Imgs2 },
        { name: isEnglish ? "Buchanan galleries, Glasgow" : "معارض بوكانان، غلاسكو", img: Imgs3 }
      ]
    },
    {
      city: isEnglish ? "Manchester" : "مانشستر",
      desc: isEnglish ? "Whether you’re seeking culture, nightlife, history..." : "سواء كنت تبحث عن الثقافة، الحياة الليلية، التاريخ...",
      link: "https://peoplemakeglasgow.com/",
      places: [
        { name: isEnglish ? "George square, Glasgow" : "ساحة جورج، غلاسكو", img: Imgs1 },
        { name: isEnglish ? "Clyde bridge, Glasgow" : "جسر كلايد، غلاسكو", img: Imgs2 },
        { name: isEnglish ? "Buchanan galleries, Glasgow" : "معارض بوكانان، غلاسكو", img: Imgs3 }
      ]
    },
    {
      city: isEnglish ? "London" : "لندن",
      desc: isEnglish ? "Whether you’re seeking culture, nightlife, history..." : "سواء كنت تبحث عن الثقافة، الحياة الليلية، التاريخ...",
      link: "https://peoplemakeglasgow.com/",
      places: [
        { name: isEnglish ? "George square, Glasgow" : "ساحة جورج، غلاسكو", img: Imgs1 },
        { name: isEnglish ? "Clyde bridge, Glasgow" : "جسر كلايد، غلاسكو", img: Imgs2 },
        { name: isEnglish ? "Buchanan galleries, Glasgow" : "معارض بوكانان nudge, Glasgow", img: Imgs3 }
      ]
    }
  ];

  const dir = isEnglish ? 'ltr' : 'rtl';
  const textAlignClass = isEnglish ? 'text-start' : 'text-end';
  const buttonAlignClass = isEnglish ? 'text-md-end' : 'text-md-start';

  const sectionStyle = {
    direction: dir,
  };

  return (
    <Container fluid className="px-0 py-3">
      {content && content.map((section, idx) => {
        const currentCity = isEnglish ? section.city_en || section.city : section.city_ar || section.city;
        const currentDesc = isEnglish ? section.desc_en || section.desc : section.desc_ar || section.desc;

        return (
          <section 
            key={idx} 
            className="mb-5 p-4 border rounded-3 shadow-sm bg-white"
            style={sectionStyle}
          >
            <Row className="mb-4 align-items-center gy-3">
              <Col xs={12} md={8} className={textAlignClass}>
                <h3 className="fw-bold mb-2 text-dark lh-base">
                  {currentCity}
                </h3>
                {currentDesc && (
                  <p className="text-muted mb-0 small lh-lg max-w-xl">
                    {currentDesc}
                  </p>
                )}
              </Col>
              
              <Col xs={12} md={4} className={`${buttonAlignClass} ${textAlignClass}`}>
                <Button 
                  href={section.link} 
                  variant="outline-primary" 
                  size="sm" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 fw-semibold btn-sm-wide"
                >
                  {isEnglish ? "Explore All Places" : "استكشف جميع الأماكن"}
                </Button>
              </Col>
            </Row>

            <Row className="g-3">
              {section.places && section.places.map((place, pIdx) => {
                // Safe database field mapping for individual card names
                const currentPlaceName = isEnglish ? place.name_en || place.name : place.name_ar || place.name;

                return (
                  <Col key={pIdx} xs={12} sm={6} md={4} lg={3}>
                    <Card className="h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-light card-hover-effect">
                      <div className="position-relative overflow-hidden" style={{ height: "180px" }}>
                        <Card.Img 
                          variant="top" 
                          src={place.img} 
                          alt={currentPlaceName}
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }} 
                        />
                      </div>
                      <Card.Body className={`d-flex flex-column justify-content-center p-3 bg-white ${textAlignClass}`}>
                        <Card.Text className="fw-bold text-dark mb-0 lh-base text-truncate-2">
                          {currentPlaceName}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </section>
        );
      })}
    </Container>
  );
}

