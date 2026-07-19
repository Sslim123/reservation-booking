import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function TouristInfoCards({ isEnglish }) {
  const dir = isEnglish ? 'ltr' : 'rtl';
  const textAlignClass = isEnglish ? 'text-start' : 'text-end';
  const marginClass = isEnglish ? 'me-3' : 'ms-3';

  const t = {
    title: isEnglish ? "Discover Our Hotel Destinations" : "اكتشف وجهات فندقنا",
    subtitle: isEnglish ? "Find and explore your next destination here" : "اكتشف وابحث عن وجهتك القادمة هنا",
    book: isEnglish ? "Book Now" : "احجز الآن",
    map: (city) => (isEnglish ? `${city} Map` : `خريطة ${city}`)
  };

  const cities = [
    { 
      name_en: "Glasgow", 
      name_ar: "غلاسكو", 
      img: "https://www.ephotozine.com/resize/2018/25/xlrg/1616_1529882978.jpg?RTUdGk5cXyJFAQgJSEc4egtnfAYYGkVUGwBdOh80SxgRBAAhdSMKY1dhB2osTU0LIjUVDw==", 
      desc_en: "Glasgow is the best shopping city with brilliant culture and historic style.",
      desc_ar: "تعد غلاسكو أفضل مدينة للتسوق وتتميز بثقافة رائعة وطراز تاريخي فريد."
    },
    { 
      name_en: "Manchester", 
      name_ar: "مانشستر", 
      img: "https://blog.redletterdays.co.uk/wp-content/uploads/2017/01/show-brooke-2.jpg", 
      desc_en: "Greater Manchester where you can search for football heritage and industrial art.",
      desc_ar: "مانشستر الكبرى حيث يمكنك البحث عن التراث الكروي والفنون الصناعية العريقة."
    },
    { 
      name_en: "London", 
      name_ar: "لندن", 
      img: "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A", 
      desc_en: "Visit London. Find incredible things to do, royal sights, and modern skyline views.",
      desc_ar: "قم بزيارة لندن. اعثر على أشياء مذهلة للقيام بها، ومعالم ملكية، وإطلالات معاصرة."
    }
  ];

  return (
    <Container className="py-5" style={{ direction: dir }}>
      <div className="text-center mb-5 max-w-2xl mx-auto">
        <h1 className="fw-extrabold text-dark tracking-tight mb-2 display-6 lh-base">
          {t.title}
        </h1>
        <p className="text-secondary fs-5 fw-light opacity-75">
          {t.subtitle}
        </p>
        <div className="bg-primary mx-auto rounded" style={{ width: "60px", height: "4px" }}></div>
      </div>

      <Row className="g-4 justify-content-center">
        {cities.map((city, index) => {
          const cityName = isEnglish ? city.name_en : city.name_ar;
          const cityDesc = isEnglish ? city.desc_en : city.desc_ar;

          return (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white custom-hero-card">
                
                <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                  <Card.Img 
                    variant="top" 
                    src={city.img} 
                    alt={cityName} 
                    className="w-100 h-100 transition-transform img-hover"
                    style={{ objectFit: "cover" }} 
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark text-white text-start" 
                       style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))", direction: dir }}>
                    <h4 className={`fw-bold mb-0 ${textAlignClass}`}>{cityName}</h4>
                  </div>
                </div>

                <Card.Body className={`d-flex flex-column p-4 ${textAlignClass}`}>
                  <Card.Text className="text-muted small lh-lg flex-grow-1 mb-4">
                    {cityDesc}
                  </Card.Text>
                  
                  <div className="d-flex align-items-center mt-auto">
                    <Button 
                      href="/booking" 
                      variant="primary" 
                      className={`px-4 py-2 fw-semibold btn-sm shadow-sm ${marginClass}`}
                    >
                      {t.book}
                    </Button>
                    <a 
                      href={`/map/${isEnglish ? city.name_en.toLowerCase() : city.name_en.toLowerCase()}`} 
                      className="text-decoration-none fw-bold small text-primary hover-underline py-2"
                    >
                      {t.map(cityName)}
                    </a>
                  </div>
                </Card.Body>

              </Card>
            </Col>
          );
        })}
      </Row>

      <style>{`
        .custom-hero-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-hero-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.12) !important;
        }
        .hover-underline:hover {
          text-decoration: underline !important;
        }
      `}</style>
    </Container>
  );
}

export default TouristInfoCards;