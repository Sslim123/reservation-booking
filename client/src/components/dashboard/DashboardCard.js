
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const DashboardCard = ({ title, value, color, isEnglish }) => {
  const textAlignClass = isEnglish ? 'text-start' : 'text-end';

  return (
    <Col xs={12} sm={6} lg={3} className="mb-4">
    
      <Card className={`border-0 border-start border-4 border-${color} shadow-sm bg-white h-100`}>
        <Card.Body className={`p-4 d-flex flex-column justify-content-center ${textAlignClass}`}>
          <h6 className="text-muted fw-bold text-uppercase small tracking-wider mb-2">
            {title}
          </h6>
          <h2 className="fw-extrabold text-dark m-0 font-monospace">
            {value}
          </h2>
        </Card.Body>
      </Card>
    </Col>
  );
}
 export default DashboardCard;