import { useEffect, useState } from "react";

import OverviewCards from "./OverviewCards";
import ReservationSummary from "./ReservationSummary";
import RoomSummary from "./RoomSummary";
import PackageTable from "./PackageTable";

const ReportsPage = ({ isEnglish }) => {

    const [dashboard, setDashboard] = useState(null);
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        loadReports();

    }, []);

    const loadReports = async () => {

        try {

            const token = localStorage.getItem("token");

            const [

                dashboardResponse,

                packageResponse

            ] = await Promise.all([

                fetch(

                    `${process.env.REACT_APP_LOCAL_HOST}/api/reports/dashboard`,

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                ),

                fetch(

                    `${process.env.REACT_APP_LOCAL_HOST}/api/report-packages`,

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                )

            ]);

            const dashboardData =
                await dashboardResponse.json();

            const packageData =
                await packageResponse.json();

            if (!dashboardData.success)

                throw new Error(dashboardData.message);

            if (!packageData.success)

                throw new Error(packageData.message);

            setDashboard(dashboardData.data);

            setPackages(packageData.data);

        }

        catch (error) {

            console.error(error);

            setError(error.message);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="text-center py-5">

                <div className="spinner-border" />

            </div>

        );

    }

    if (error) {

        return (

            <div className="alert alert-danger">

                {error}

            </div>

        );

    }
console.log("packages are :", packages);
console.log("dashboard are ", dashboard);
    return (

        <div className="container-fluid">
            <div className="mb-4">

                <h2 className="fw-bold">
                    {isEnglish
                        ? "التقارير"
                        : "Reports"}
                </h2>

                <small className="text-muted">

                    {isEnglish
                        ? "لوحة تقارير إدارة الفندق"
                        : "Hotel Management Reports"}

                </small>

            </div>
            <OverviewCards dashboard={dashboard} isEnglish={isEnglish} />

            <ReservationSummary dashboard={dashboard}isEnglish={isEnglish} />

            <RoomSummary dashboard={dashboard}isEnglish={isEnglish} />

            <PackageTable packages={packages}  isEnglish={isEnglish}/>

        </div>

    );

};

export default ReportsPage;