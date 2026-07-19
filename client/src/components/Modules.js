import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Accept language props from parent
function Modules({ isEnglish }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" size="sm" className="px-4 fw-bold rounded-pill" onClick={handleShow}>
        {isEnglish ? "Contact Us" : "اتصل بنا"}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered 
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title className="fs-5 fw-bold">
            {isEnglish ? "Get in Touch" : "تواصل معنا"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 text-start">
          <h6 className="fw-bold text-muted text-uppercase small mb-3">
            {isEnglish ? "Contact Details" : "تفاصيل الاتصال"}
          </h6>
          <div className="bg-light p-3 rounded border">
            <div className="mb-2">
              <strong className="text-dark small d-block">{isEnglish ? "Email Address:" : "البريد الإلكتروني:"}</strong>
              <span className="text-secondary small">slemsalem@gmail.com</span>
            </div>
            <div>
              <strong className="text-dark small d-block">{isEnglish ? "Phone Number:" : "رقم الهاتف:"}</strong>
              <span className="text-secondary small">0734985444</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button variant="secondary" className="px-4 btn-sm fw-bold" onClick={handleClose}>
            {isEnglish ? "Close" : "إغلاق"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modules;
