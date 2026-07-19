import React from "react";
import { Card } from "react-bootstrap";

const PackageSelection = ({ packages, bookingData, setBookingData, isEnglish }) => {

  const handleSelect = (pkg) => {
    setBookingData(prev => ({ ...prev, package_id: pkg.id }));
  };

  return (
    <div className="mt-5">

      <h5 className="fw-bold mb-3">
        {isEnglish ? "Choose Your Package" : "اختر الباقة"}
      </h5>
      <div className="row g-3">

        {packages.map(pkg => (
          <div key={pkg.id} className="col-md-6"         >
            <Card
              className={`h-100 shadow-sm cursor-pointer ${bookingData.package_id === pkg.id
                ? "border-warning border-3"
                : ""
                }`}
              onClick={() => handleSelect(pkg)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <Card.Title>
                  {isEnglish ? pkg.name_en : pkg.name_ar}
                </Card.Title>

                <Card.Text className="text-muted">
                  {isEnglish ? pkg.description_en : pkg.description_ar}
                </Card.Text>

                <Card.Text className="fw-bold text-warning">
                  £{pkg.price_per_night} / night
                </Card.Text>
              </Card.Body>

            </Card>
          </div>

        ))}

      </div>

    </div>
  );
};

export default PackageSelection;