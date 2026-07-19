import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Heading({ isEnglish, setIsEnglish, toggleLanguage }) {
  const [showNavBar, setShowNavBar] = useState(false);
  const [clicks, setClicks] = useState(0);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const next = clicks + 1;

    if (next >= 5) {
      setClicks(0);
      navigate("/admin/login");
      return;
    }

    setClicks(next);
  };
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow px-4 py-3 border-bottom border-secondary sticky-top">
      <div className="container-fluid flex-row-reverse flex-lg-row">



        <span className="navbar-brand fw-bold tracking-wider fs-4 text-white">
          VIS<span onClick={handleLogoClick}
            className="text-warning" style={{ cursor: "pointer" }}
          >TARA</span>
        </span>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setShowNavBar(!showNavBar)}
          aria-expanded={showNavBar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${showNavBar ? 'show' : ''}`}>
          <ul className={`navbar-nav ${isEnglish ? 'ms-auto' : 'me-auto'} mb-2 mb-lg-0 align-items-center gap-2 mt-3 mt-lg-0`}>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3 text-uppercase text-white-50" href="/">
                {isEnglish ? "Home" : "الرئيسية"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3 text-uppercase text-white-50" href="/booking">
                {isEnglish ? "Booking" : "الحجوزات"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3 text-uppercase text-white-50" href="/offers">
                {isEnglish ? "Offers" : "العروض"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3 text-uppercase text-white-50" href="/about">
                {isEnglish ? "About" : "معلومات عنّا"}
              </a>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                className="btn btn-sm btn-outline-warning fw-bold px-3 py-1.5 text-uppercase rounded-pill shadow-sm"
                onClick={toggleLanguage}
                style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}
              >
                {isEnglish ? "العربية" : "English"}
              </button>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
}

export default Heading;
