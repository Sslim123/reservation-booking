import React, { useEffect, useState } from 'react';
import { Row, Card, Table, Badge } from 'react-bootstrap';
import DashboardCard from './DashboardCard';
const DashboardPage = ({ isEnglish }) => {
  const dir = isEnglish ? 'ltr' : 'rtl';
  const [dashboard, setDashboard] = useState(null);
  const t = {
    totalRooms: isEnglish ? "Total Rooms" : "إجمالي الغرف",
    available: isEnglish ? "Available" : "الغرف المتاحة",
    reserved: isEnglish ? "Reserved" : "الغرف المحجوزة",
    occupied: isEnglish ? "Occupied" : "الغرف المشغولة",
    totalRooms: isEnglish ? "Total Rooms" : "إجمالي الغرف",
    available: isEnglish ? "Available" : "الغرف المتاحة",
    reserved: isEnglish ? "Reserved" : "الغرف المحجوزة",
    occupied: isEnglish ? "Occupied" : "الغرف المشغولة",
    arrivalsToday: isEnglish ? "Today's Arrivals" : "وصول اليوم",
    departuresToday: isEnglish ? "Today's Departures" : "مغادرة اليوم",
    pendingPayments: isEnglish ? "Pending Payments" : "الدفعات المعلقة",
    revenueToday: isEnglish ? "Today's Revenue" : "إيرادات اليوم",
    booking: isEnglish ? "Booking" : "الحجز",

    guest: isEnglish ? "Guest" : "الضيف",

    status: isEnglish ? "Status" : "الحالة",

    date: isEnglish ? "Date" : "التاريخ",

    recentActivity: isEnglish ? "Lastest Hotel Activity" : "آخر الأنشطة"
  };
  const loadDashboard = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(

        `${process.env.REACT_APP_LOCAL_HOST}/api/dashboard`,

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      const result = await response.json();

      if (result.success) {

        setDashboard(result.dashboard);

      }

    }

    catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    loadDashboard();

  }, []);
  return (
    <div className="w-100 container-fluid px-0" style={{ direction: dir }}>
      <Row className="g-3">
        <DashboardCard
          title={t.totalRooms}
          value={dashboard?.totalRooms ?? 0}
          color="primary"
          isEnglish={isEnglish}
        />

        <DashboardCard
          title={t.available}
          value={dashboard?.availableRooms ?? 0}
          color="success"
          isEnglish={isEnglish}
        />

        <DashboardCard
          title={t.reserved}
          value={dashboard?.reservedRooms ?? 0}
          color="warning"
          isEnglish={isEnglish}
        />

        <DashboardCard
          title={t.occupied}
          value={dashboard?.occupiedRooms ?? 0}
          color="danger"
          isEnglish={isEnglish}
        />

      </Row>
      <Row className="g-3 mt-1">

        <DashboardCard
          title={t.arrivalsToday}
          value={dashboard?.arrivalsToday ?? 0}
          color="info"
          isEnglish={isEnglish}
        />

        <DashboardCard
          title={t.departuresToday}
          value={dashboard?.departuresToday ?? 0}
          color="secondary"
          isEnglish={isEnglish}
        />

        <DashboardCard
          title={t.pendingPayments}
          value={dashboard?.pendingPayments ?? 0}
          color="warning"
          isEnglish={isEnglish}
        />

        <DashboardCard
          title={t.revenueToday}
          value={`£${dashboard?.revenueToday.toFixed(2) ?? "0.00"}`}
          color="success"
          isEnglish={isEnglish}
        />

      </Row>
      <Card className="shadow-sm border-0 mt-4">

        <Card.Header className="bg-dark text-white">

          {t.recentActivity}

        </Card.Header>

        <Card.Body>

          <Table hover responsive>

            <thead>

              <tr>

                <th>{t.booking}</th>

                <th>{t.guest}</th>

                <th>{t.status}</th>

                <th>{t.date}</th>

              </tr>

            </thead>

            <tbody>

              {

                dashboard?.recentBookings?.map(item => (

                  <tr key={item.id}>

                    <td>

                      {item.booking_reference}

                    </td>

                    <td>

                      {item.first_name} {item.last_name}

                    </td>

                    <td>

                      <Badge>

                        {item.status}

                      </Badge>

                    </td>

                    <td>

                      {

                        new Date(item.created_at)

                          .toLocaleDateString()

                      }

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </Table>

        </Card.Body>

      </Card>
    </div>
  );
};

export default DashboardPage;