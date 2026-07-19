import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Img1 from "../images/images6.jpg";
import Img2 from "../images/imagesroom.jpg";
import Img3 from "../images/images7.jpg";



function Slides({ isEnglish }) {
  return (
    <div className="w-100 shadow-sm overflow-hidden" style={{ maxHeight: "460px" }}>
      <Carousel fade indicators={true} controls={true} interval={5000}>
        
        {/* SLIDE 1 */}
        <Carousel.Item style={{ height: "460px", backgroundColor: "#1a1a1a" }}>
          <img 
            className="d-block w-100 h-100 img-fluid" 
            src={Img1} 
            alt="Luxury Hotel Suite" 
            style={{ objectFit: "cover", opacity: "0.75" }}
          />
          <Carousel.Caption className="d-flex flex-column h-100 justify-content-center align-items-center bottom-0 pb-5">
            <h2 className="fw-bold text-uppercase tracking-wide text-black mb-2 text-shadow">
              {isEnglish ? "Luxury Living Redefined" : "إعادة تعريف الإقامة الفاخرة"}
            </h2>
            <p className="small text-black-50 max-w-md text-center d-none d-sm-block px-3">
              {isEnglish 
                ? "Experience our premium suites crafted with world-class architecture and breathtaking scenic views." 
                : "جرب أجنحتنا المتميزة المصممة بهندسة معمارية عالمية وإطلالات خلابة ساحرة."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: "460px", backgroundColor: "#1a1a1a" }}>
          <img 
            className="d-block w-100 h-100 img-fluid" 
            src={Img2} 
            alt="Premium Hotel Lounge" 
            style={{ objectFit: "cover", opacity: "0.75" }}
          />
          <Carousel.Caption className="d-flex flex-column h-100 justify-content-center align-items-center bottom-0 pb-5">
            <h2 className="fw-bold text-uppercase tracking-wide text-white mb-2 text-shadow">
              {isEnglish ? "World-Class Amenities" : "مرافق ذات مستوى عالمي"}
            </h2>
            <p className="small text-white-50 max-w-md text-center d-none d-sm-block px-3">
              {isEnglish 
                ? "Indulge in award-winning culinary spaces, rooftop pools, and state-of-the-art wellness centers." 
                : "استمتع بمساحات الطهي الحائزة على جوائز، والمسابح العلوية، ومراكز العافية الحديثة."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: "460px", backgroundColor: "#1a1a1a" }}>
          <img 
            className="d-block w-100 h-100 img-fluid" 
            src={Img3} 
            alt="Scenic Hotel View" 
            style={{ objectFit: "cover", opacity: "0.75" }}
          />
          <Carousel.Caption className="d-flex flex-column h-100 justify-content-center align-items-center bottom-0 pb-5">
            <h2 className="fw-bold text-uppercase tracking-wide text-white mb-2 text-shadow">
              {isEnglish ? "Unforgettable Journeys" : "رحلات لا تُنسى"}
            </h2>
            <p className="small text-white-50 max-w-md text-center d-none d-sm-block px-3">
              {isEnglish 
                ? "Discover unique destinations and enjoy flexible reservation options for any holiday package." 
                : "اكتشف وجهات فريدة واستمتع بخيارات حجز مرنة لأي باقة عطلات."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Slides;
