import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CustomerProfile = ({ reservation, id, first, room, email, days, isEnglish }) => {
  const [letMeOut, setLetMeOut] = useState(true);
  const navigate = useNavigate();

  const loggedOut = () => {
    setLetMeOut(false);
    navigate('/admin/reservations');
  };

  if (!reservation) return null;

  const t = {
    title: isEnglish ? "Customer Profile" : "ملف العميل الشخصي",
    id: isEnglish ? "ID" : "المعرف",
    bookingRef: isEnglish ? "Booking Ref" : "مرجع الحجز",
    name: isEnglish ? "Name" : "الاسم",
    email: isEnglish ? "Email" : "البريد الإلكتروني",
    room: isEnglish ? "Room" : "الغرفة",
    package: isEnglish ? "Package" : "الباقة",
    checkIn: isEnglish ? "Check In" : "تاريخ الوصول",
    checkOut: isEnglish ? "Check Out" : "تاريخ المغادرة",
    nights: isEnglish ? "Nights" : "الليالي",
    adults: isEnglish ? "Adults" : "البالغين",
    children: isEnglish ? "Children" : "الأطفال",
    status: isEnglish ? "Status" : "الحالة",
    specialRequests: isEnglish ? "Special Requests" : "طلبات خاصة",
    none: isEnglish ? "None" : "لا يوجد",
    signOut: isEnglish ? "Close Profile" : "إغلاق الملف الشخصي"
  };

  const dir = isEnglish ? 'ltr' : 'rtl';
  const textAlignClass = isEnglish ? 'text-start' : 'text-end';
  const marginClass = isEnglish ? 'me-2' : 'ms-2';

  const currentPackage = isEnglish 
    ? (reservation.packages?.name_en || reservation.packages?.name) 
    : (reservation.packages?.name_ar || reservation.packages?.name_en || reservation.packages?.name);

  return (
    <div className="card shadow-sm border-0 rounded-3 overflow-hidden" style={{ direction: dir }}>
      <div className={`card-header bg-dark text-white fw-bold py-3 ${textAlignClass}`}>
        {t.title}
      </div>
      
      <ul className="list-group list-group-flush p-0 m-0">
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.id}:</strong> 
          <span className="text-secondary font-monospace">{reservation.id}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.bookingRef}:</strong> 
          <span className="text-uppercase font-monospace text-primary fw-bold">{reservation.booking_reference}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.name}:</strong> 
          <span className="text-dark fw-semibold">{reservation.first_name} {reservation.last_name}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.email}:</strong> 
          <span className="text-muted small">{reservation.email}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.room}:</strong> 
          <span className="badge bg-light text-dark border px-2 py-1">{reservation.rooms?.room_number || "—"}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.package}:</strong> 
          <span className="text-secondary small">{currentPackage || "—"}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.checkIn}:</strong> 
          <span className="text-muted small">{reservation.check_in}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.checkOut}:</strong> 
          <span className="text-muted small">{reservation.check_out}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.nights}:</strong> 
          <span className="fw-bold text-dark">{reservation.nights}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.adults}:</strong> 
          <span className="text-dark">{reservation.adults}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.children}:</strong> 
          <span className="text-dark">{reservation.children}</span>
        </li>
        <li className={`list-group-item py-2.5 ${textAlignClass}`}>
          <strong className={marginClass}>{t.status}:</strong> 
          <span className={`badge px-2 py-1 ${
            reservation.status === "CONFIRMED" ? "bg-success" : 
            reservation.status === "CHECKED_IN" ? "bg-primary" : "bg-secondary"
          }`}>
            {reservation.status}
          </span>
        </li>
        <li className={`list-group-item py-3 bg-light-subtle ${textAlignClass}`}>
          <strong className="d-block mb-1 text-dark">{t.specialRequests}:</strong> 
          <p className="text-muted small mb-0 lh-base bg-white p-2 rounded border border-light-subtle">
            {reservation.special_requests || t.none}
          </p>
        </li>
      </ul>
      
      <div className="p-3 bg-light border-top">
        <Button 
          variant="danger" 
          className="w-100 py-2 fw-semibold rounded-3 shadow-sm btn-sm"
          onClick={loggedOut}
        >
          {t.signOut}
        </Button>
      </div>
    </div>
  );
};

export default CustomerProfile;