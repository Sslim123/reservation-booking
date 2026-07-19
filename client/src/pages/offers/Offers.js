import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Heading from "../../components/Heading";
import Card from "react-bootstrap/Card";
import Footer from "../../components/Footer";
import Welcome from "../../components/Welcome";
import Imgs1 from "../../images/images.jpeg";
import Imgs2 from "../../images/images4.jpg";
import Imgs3 from "../../images/images5.jpeg";
const Offers = ({ isEnglish, setIsEnglish }) => {

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_LOCAL_HOST}/api/offers`);
        const data = await response.json();
        if (data.success) { setOffers(data.data); }
      } catch (err) {
        console.error("Failed to fetch offers:", err);
        setError("Failed to load offers.");
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  if (loading) {
    return (
      <>
        <Heading isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="container py-5 text-center">
          <div
            className="spinner-border text-warning"
            role="status"
          />
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Heading isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="container py-5">
          <div className="alert alert-danger">
            {error}
          </div>
        </div>
      </>
    );

  }
  return (
    <div className="d-flex flex-column min-vh-100 bg-light" dir={isEnglish ? "ltr" : "rtl"}>
      <Heading isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase">    {isEnglish ? "Exclusive Hotel Offers" : "عروض الفندق الحصرية"}  </h2>
        <div
          className="bg-warning mx-auto my-3 rounded"
          style={{ width: "70px", height: "4px" }} />
        <p className="text-muted">
          {isEnglish
            ? "Discover exclusive packages designed for your perfect stay."
            : "اكتشف العروض الحصرية المصممة لإقامة مثالية."}
        </p>
      </div>
      <main className="container flex-grow-1 py-5">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-warning" />
          </div>
        ) : error ? (
          <div className="alert alert-danger">
            {error}
          </div>
        ) : (
          <div className="row g-4">
            {offers.map((offer, index) => (
              <div key={offer.id} className="col-12  col-lg-6">
                <Card className="h-100 border-0 shadow-sm overflow-hidden bg-white rounded position-relative">
                  <span className={`position-absolute top-0 ${isEnglish ? 'end-0' : 'start-0'} m-2 badge bg-dark text-warning px-3 py-2 shadow-sm rounded-pill fw-bold`} style={{ zIndex: 2, fontSize: "0.75rem" }}>
                    {offer.badge}
                  </span>
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <Card.Img
                      variant="top"
                      src={Imgs1}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-between p-4">
                    <div>
                      <Card.Title className="fw-bold text-dark mb-2 h4">
                        {isEnglish ? `Here, ${offer.room_type}` : `هنا، ${offer.room_type}`}
                      </Card.Title>
                      <Card.Text className="text-muted small lh-base mb-4">
                        {isEnglish
                          ? offer.description
                          : offer.description_ar}
                      </Card.Text>
                      <Card.Text className="text-muted small lh-base mb-4">
                        {offer.original_price} {isEnglish ? "USD" : "دولار أمريكي"}
                      </Card.Text>
                      <Card.Text className="text-muted small lh-base mb-4">
                        {offer.discount_percentage} {isEnglish ? "% Off" : "خصم"}
                      </Card.Text>
                      <Card.Text className="text-muted small lh-base mb-4">
                        {offer.valid_from} {isEnglish ? "to" : "إلى"} {offer.valid_until}
                      </Card.Text>
                      <Card.Text className="text-muted small lh-base mb-4">
                        {offer.breakfast_included ? (isEnglish ? "Breakfast Included" : "يشمل الإفطار") : (isEnglish ? "No Breakfast" : "لا يشمل الإفطار")}
                         <Card.Text className="text-muted small lh-base mb-4">
                        {offer.free_wifi ? (isEnglish ? "Free Wi-Fi" : "واي فاي مجاني") : (isEnglish ? "No Wi-Fi" : "لا يوجد واي فاي")}
                      </Card.Text>
                      </Card.Text>

                    </div>
                    <Button
                      href="/booking"
                      variant="warning"
                      className="w-100 fw-bold py-2 text-uppercase shadow-sm"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {isEnglish ? "Book This Offer" : "احجز هذا العرض"}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
