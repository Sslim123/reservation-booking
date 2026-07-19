import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer({ isEnglish }) {

  return (

    <footer className="bg-dark text-light mt-5">

      <div className="container py-5">

        <div className="row gy-5">

          <div className="col-lg-3">

            <h3 className="fw-bold">

              <span className="text-white">
                VIS
              </span>

              <span className="text-warning">
                TARA
              </span>

            </h3>

            <p className="small text-light-emphasis mt-3">

              {

                isEnglish ?

                  "Experience seamless hotel booking, exclusive offers and professional hospitality management."

                  :

                  "استمتع بتجربة حجز فنادق سهلة، وعروض حصرية، وخدمات ضيافة احترافية."

              }

            </p>

          </div>

          <div className="col-lg-2">

            <h5 className="text-warning mb-3">

              {

                isEnglish ?

                  "Explore"

                  :

                  "استكشف"

              }

            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">

                <Link className="text-decoration-none text-light" to="/">

                  {

                    isEnglish ?

                      "Home"

                      :

                      "الرئيسية"

                  }

                </Link>

              </li>

              <li className="mb-2">

                <Link className="text-decoration-none text-light" to="/booking">

                  {

                    isEnglish ?

                      "Booking"

                      :

                      "الحجز"

                  }

                </Link>

              </li>

              <li className="mb-2">

                <Link className="text-decoration-none text-light" to="/offers">

                  {

                    isEnglish ?

                      "Offers"

                      :

                      "العروض"

                  }

                </Link>

              </li>

              <li>

                <Link className="text-decoration-none text-light" to="/about">

                  {

                    isEnglish ?

                      "About"

                      :

                      "من نحن"

                  }

                </Link>

              </li>

            </ul>

          </div>


          <div className="col-lg-3">

            <h5 className="text-warning mb-3">

              {

                isEnglish ?

                  "Services"

                  :

                  "الخدمات"

              }

            </h5>
            <ul className="list-unstyled">

              <li className="mb-2">

                <Link
                  to="/manage-reservation"
                  className="footer-link"
                >
                  {isEnglish
                    ? "Manage Reservation"
                    : "إدارة الحجز"}
                </Link>

              </li>

              <li className="mb-2">

                <Link
                  to="/offers"
                  className="footer-link"
                >
                  {isEnglish
                    ? "Exclusive Offers"
                    : "العروض الحصرية"}
                </Link>

              </li>

              <li className="mb-2">

                <Link
                  to="/booking"
className="footer-link"                >
                  {isEnglish
                    ? "Room Availability"
                    : "توفر الغرف"}
                </Link>

              </li>

              <li>

                <Link
                  to="/contact"
                  className="footer-link"
                >
                  {isEnglish
                    ? "Customer Support"
                    : "دعم العملاء"}
                </Link>

              </li>

            </ul>
            {/* <ul className="list-unstyled">

                            <li className="mb-2">

                                <Link
                                    className="text-decoration-none text-light"
                                    to="/manage-reservation"
                                >

                                    {

                                        isEnglish ?

                                            "Manage Reservation"

                                            :

                                            "إدارة الحجز"

                                    }

                                </Link>

                            </li>

                            <li className="mb-2">

                                {

                                    isEnglish ?

                                        "Exclusive Offers"

                                        :

                                        "العروض الحصرية"

                                }

                            </li>

                            <li className="mb-2">

                                {

                                    isEnglish ?

                                        "Room Availability"

                                        :

                                        "توفر الغرف"

                                }

                            </li>

                            <li>

                                {

                                    isEnglish ?

                                        "Customer Support"

                                        :

                                        "دعم العملاء"

                                }

                            </li>

                        </ul> */}

          </div>


          <div className="col-lg-2">

            <h5 className="text-warning mb-3">

              {

                isEnglish ?

                  "Contact"

                  :

                  "اتصل بنا"

              }

            </h5>

            <p>

              <FaMapMarkerAlt className="me-2 text-warning" />

              London, UK

            </p>

            <p>

              <FaEnvelope className="me-2 text-warning" />

              info@VISTARA.com

            </p>

            <p>

              <FaPhoneAlt className="me-2 text-warning" />

              +44 XXX XXX XXXX

            </p>

          </div>


          <div className="col-lg-2">

            <h5 className="text-warning mb-3">

              {

                isEnglish ?

                  "Follow Us"

                  :

                  "تابعنا"

              }

            </h5>

            <div className="d-flex gap-3 fs-3">

              <a href="#" className="text-light animate-icon">

                <FaFacebookSquare />

              </a>

              <a href="#" className="text-light animate-icon">

                <FaInstagramSquare />

              </a>

              <a href="#" className="text-light animate-icon">

                <FaTwitterSquare />

              </a>

              <a href="#" className="text-light animate-icon">

                <FaLinkedin />

              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-top border-secondary">

        <div className="container py-3">

          <div className="row">

            <div className="col-md-6 text-center text-md-start">

              <small>

                © 2026 VISTARA.

                {

                  isEnglish ?

                    " All Rights Reserved."

                    :

                    " جميع الحقوق محفوظة."

                }

              </small>

            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">

              <small>

                <a href="#" className="text-decoration-none text-light me-3 animate-icon">

                  {

                    isEnglish ?

                      "Privacy Policy"

                      :

                      "سياسة الخصوصية"

                  }

                </a>

                <a href="#" className="text-decoration-none text-light animate-icon">

                  {

                    isEnglish ?

                      "Terms"

                      :

                      "الشروط والأحكام"

                  }

                </a>

              </small>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

}

export default Footer;