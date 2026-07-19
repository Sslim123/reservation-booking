import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./pages/admin/AdminLayout.js";
import DashboardPage from "./components/dashboard/DashboardPage.js";
import CustomerReservation from "./pages/customer/CustomerReservation.js";
import ReportsPage from "./pages/admin/ReportsPage.js";
import ReceptionDashboard from "./pages/admin/ReceptionDashboard";
import RoomDashboard from "./pages/admin/RoomDashboard.js";
import AdminLogin from "./pages/admin/AdminLogin.js";
import ProtectedAdminRoute from "./ProtectAdminRoute.js";
import Home from "./pages/home/Home.js";
import Booking from "./pages/booking/Booking.js";
import Offers from "./pages/offers/Offers.js";
import About from "./pages/about/About.js";

import "./App.css";
//import ReceivePaymentModal from "./components/payments/RecivePaymentModal.js";
import PaymentsDashboard from "./components/payments/PaymentsDashboard.js";
const App = props => {
  const [isEnglish, setIsEnglish] = useState(()=> {

  return localStorage.getItem("language") !== "ar";
});

const toggleLanguage = () => {
    setIsEnglish(prev => {
        const next = !prev;

        localStorage.setItem(
            "language",
            next ? "en" : "ar"
        );

        return next;
    });
};
  return (
    <div className="container-fluid p-0" dir={isEnglish ? "ltr" : "rtl"}>

      <Routes>
        <Route path="/" element={<Home isEnglish={isEnglish} setIsEnglish={setIsEnglish} toggleLanguage={toggleLanguage} />} />
        <Route path="/booking" element={<Booking isEnglish={isEnglish} setIsEnglish={setIsEnglish} toggleLanguage={toggleLanguage} />} />
        <Route path="/offers" element={<Offers isEnglish={isEnglish} setIsEnglish={setIsEnglish} toggleLanguage={toggleLanguage} />} />
        <Route path="/about" element={<About isEnglish={isEnglish} setIsEnglish={setIsEnglish} toggleLanguage={toggleLanguage} />} />

        <Route path="/manage-reservation" element={<CustomerReservation isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
        <Route path="/admin/login" element={<AdminLogin isEnglish={isEnglish} />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            </ProtectedAdminRoute>
          }
        >
          <Route path="/admin" element={<DashboardPage isEnglish={isEnglish} />} />

          <Route path="/admin/reservations" element={<ReceptionDashboard isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
          <Route path="/admin/payments" element={<PaymentsDashboard isEnglish={isEnglish} />} />
          <Route path="/admin/rooms" element={<RoomDashboard isEnglish={isEnglish} />} />
          <Route path="/admin/reports" element={<ReportsPage isEnglish={isEnglish} />} />
        </Route>
      </Routes>
    </div >
  );
};

export default App;
