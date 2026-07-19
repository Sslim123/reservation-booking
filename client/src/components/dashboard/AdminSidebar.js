import { NavLink } from "react-router-dom";

const AdminSidebar = ({ isEnglish }) => {

    return (

        <div
            className="bg-dark text-white position-fixed"
            style={{
                width: "260px",
                height: "100vh",
                left: 0,
                top: 0
            }}
        >

            <div className="p-4">

                <h3 className="fw-bold">

                    VISTARA

                </h3>

                <small className="text-warning">

                    {isEnglish ? "Administration" : "الاداره"}

                </small>

            </div>

            <div className="nav flex-column">

                <NavLink
                    className="nav-link text-white px-4 py-3"
                    to="/admin"
                >
                    {isEnglish ? "Dashboard" : "لوحت التحكم"}
                </NavLink>

                <NavLink
                    className="nav-link text-white px-4 py-3"
                    to="/admin/reservations"
                >
                    {isEnglish ? "Receptions" : "شوون الاداره "}
                </NavLink>

                <NavLink
                    className="nav-link text-white px-4 py-3"
                    to="/admin/rooms"
                >
                    {isEnglish ? "Rooms" : "اداره الغرف"}
                </NavLink>

                <NavLink
                    className="nav-link text-white px-4 py-3"
                    to="/admin/payments"
                >
                    {isEnglish ? "Payments" : "الشوون الماليه"}
                </NavLink>

                <NavLink
                    className="nav-link text-white px-4 py-3"
                    to="/admin/reports"
                >
                    {isEnglish ? "Reports" : "التقارير"}
                </NavLink>

                <NavLink
                    className="nav-link text-white px-4 py-3"
                    to="/"
                >
                    Exit Admin
                </NavLink>

            </div>

        </div>

    );

};

export default AdminSidebar;