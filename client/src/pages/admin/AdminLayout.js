import { Outlet } from "react-router-dom";
import AdminSidebar from '../../components/dashboard/AdminSidebar';
import AdminHeader from "../../components/dashboard/AdminHeader";

const AdminLayout = ({isEnglish,setIsEnglish}) => {
  const dir = isEnglish ? "ltr" : "rtl";

    return (

        <div className="d-flex" style={{direction: dir }}>

            <AdminSidebar isEnglish={isEnglish}/>

            <div
                className="flex-grow-1"
                style={{
                    marginLeft: "260px",
                    minHeight: "100vh",
                    background: "#f8f9fa"
                }}
            >

                <AdminHeader isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>

                <div className="container-fluid py-4">

                    <Outlet />

                </div>

            </div>

        </div>

    );

};

export default AdminLayout;