import React from "react";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import HotelFeatures from "./HotelFeatures";
import Hero from "./Hero";
import GuestTestimonials from "./GuestTestimonials";
const Home = ({ isEnglish, toggleLanguage, setIsEnglish }) => {
  const dir = isEnglish ? "ltr" : "rtl";

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-neutral" style={{ direction: dir }}>
      <Heading isEnglish={isEnglish} toggleLanguage={toggleLanguage}setIsEnglish={setIsEnglish} />
      
      <main className="flex-grow-1 overflow-hidden">
        <Hero isEnglish={isEnglish} />
            <HotelFeatures isEnglish={isEnglish} />
            <GuestTestimonials isEnglish={isEnglish} />
        <div className="bg-white py-4 py-md-5 border-bottom border-light">
        </div>

        <div className="bg-light py-5">
        </div>

        <div className="bg-white py-5 border-top border-light">
        </div>

      </main>

      <Footer isEnglish={isEnglish} />

      <style>{`
        body {
          overflow-x: hidden;
          background-color: #fdfdfd;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .bg-light-neutral {
          background-color: #f8f9fa;
        }
        main > div {
          transition: background-color 0.4s ease;
        }
      `}</style>
    </div>
  );
};

export default Home;