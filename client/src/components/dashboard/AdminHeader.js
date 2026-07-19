import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Badge } from "react-bootstrap";

const AdminHeader = ({ isEnglish, setIsEnglish }) => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);

  const loggedMeOut = () => {
    setLogged(true);
    navigate('/');
  };

  const dir = isEnglish ? 'ltr' : 'rtl';
  const textAlignClass = isEnglish ? 'text-start' : 'text-end';

  return (
    <div
      className="bg-white border-bottom border-light-subtle shadow-sm px-4 py-3 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3"
      style={{ direction: dir }}
    >
      <div className={textAlignClass}>
        <h4 className="fw-bold mb-0 text-dark tracking-tight">
          {isEnglish ? "Hotel Administration" : "إدارة الفندق"}
        </h4>
        <small className="text-muted font-monospace small opacity-75">
          {isEnglish ? "CYF Hotel Management System" : "نظام إدارة فندق CYF"}
        </small>
      </div>

      <div className="d-flex align-items-center justify-content-between justify-content-sm-end gap-3 flex-wrap">
        
        <div className="d-flex align-items-center">
          <Badge bg="success" className="px-2.5 py-1.5 fw-semibold shadow-sm">
            {isEnglish ? "Online" : "متصل الآن"}
          </Badge>
        </div>

        <div className="d-flex align-items-center gap-2">
          <Button 
            variant="outline-secondary"
            size="sm"
            className="px-3 py-1.5 fw-bold shadow-sm"
            onClick={() => setIsEnglish(!isEnglish)}
          >
            {isEnglish ? "العربية" : "English"}
          </Button>

          <Button 
            variant="danger" 
            size="sm"
            className="px-3 py-1.5 fw-semibold shadow-sm text-white"
            onClick={loggedMeOut}
          >
            {isEnglish ? "Log Out" : "تسجيل الخروج"}
          </Button>
        </div>

      </div>
    </div>
  );
};

export default AdminHeader;