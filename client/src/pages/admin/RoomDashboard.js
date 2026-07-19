import { useEffect, useState } from "react";
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';

const RoomDashboard = ({ isEnglish }) => {

  const [rooms, setRooms] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const selectRoom = async (room) => {

    setSelectedRoom(room);

    const response = await fetch(

      `${process.env.REACT_APP_LOCAL_HOST}/api/rooms/${room.id}/reservation`

    );

    const result = await response.json();

    setSelectedReservation(

      result.reservation

    );

  };
  const loadRooms = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/api/rooms`
      );
      const result = await response.json();
      if (result.success) {
        setRooms(result.rooms);
      }
    }
    catch (err) {
      console.error(err);
    }

  };

  const loadStatistics = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL_HOST}/api/rooms/statistics`
      );
      const result = await response.json();
      if (result.success) {
        setStatistics(result.statistics);
      }
    }
    catch (err) {
      console.error(err);
    }

  };
  useEffect(() => {

    loadRooms();

    loadStatistics();

  }, []);
  const filteredRooms = filter === "ALL" ? rooms : rooms.filter(room => room.current_status === filter);


  const t = {
    totalRooms: isEnglish ? "Total Rooms" : "إجمالي الغرف",
    available: isEnglish ? "Available" : "متاحة",
    reserved: isEnglish ? "Reserved" : "محجوزة",
    occupied: isEnglish ? "Occupied" : "مشغولة",
    all: isEnglish ? "All" : "الكل",
    roomLabel: isEnglish ? "Room" : "غرفة",
    statusLabel: isEnglish ? "Status" : "الحالة",
    guestLabel: isEnglish ? "Guest" : "الضيف",
    bookingLabel: isEnglish ? "Booking" : "الحجز",
    packageLabel: isEnglish ? "Package" : "الباقة",
    checkInLabel: isEnglish ? "Check In" : "تاريخ الوصول",
    checkOutLabel: isEnglish ? "Check Out" : "تاريخ المغادرة",
    availableMessage: isEnglish ? "Room is currently available." : "الغرفة متاحة حالياً للتشغيل."
  };

  const dir = isEnglish ? 'ltr' : 'rtl';
  const textAlignClass = isEnglish ? 'text-start' : 'text-end';

  const currentPackage = isEnglish
    ? (selectedReservation?.packages?.name_en || selectedReservation?.packages?.name)
    : (selectedReservation?.packages?.name_ar || selectedReservation?.packages?.name_en || selectedReservation?.packages?.name);

  return (
    <div className="container-fluid px-0" style={{ direction: dir }}>

      <Row className="g-3 mb-4">
        {[
          { value: statistics?.total, label: t.totalRooms, color: "dark" },
          { value: statistics?.available, label: t.available, color: "success" },
          { value: statistics?.reserved, label: t.reserved, color: "warning" },
          { value: statistics?.occupied, label: t.occupied, color: "danger" }
        ].map((stat, sIdx) => (
          <Col key={sIdx} xs={6} md={3}>
            <Card className="border-0 shadow-sm rounded-3 bg-white h-100 text-center">
              <Card.Body className="p-3">
                <h2 className={`fw-extrabold mb-1 text-${stat.color}`}>{stat.value ?? 0}</h2>
                <p className="text-muted small fw-medium mb-0 text-truncate">{stat.label}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className={`mb-4 d-flex flex-wrap gap-2 justify-content-start`}>
        <Button size="sm" variant={filter === "ALL" ? "dark" : "outline-dark"} className="px-3" onClick={() => setFilter("ALL")}>
          {t.all}
        </Button>
        <Button size="sm" variant={filter === "AVAILABLE" ? "success" : "outline-success"} className="px-3" onClick={() => setFilter("AVAILABLE")}>
          {t.available}
        </Button>
        <Button size="sm" variant={filter === "RESERVED" ? "warning" : "outline-warning"} className="px-3 text-dark" onClick={() => setFilter("RESERVED")}>
          {t.reserved}
        </Button>
        <Button size="sm" variant={filter === "OCCUPIED" ? "danger" : "outline-danger"} className="px-3" onClick={() => setFilter("OCCUPIED")}>
          {t.occupied}
        </Button>
      </div>
      <Row className="g-3">
        {filteredRooms && filteredRooms.map(room => (
          <Col key={room.id} xs={6} sm={4} md={3} lg={2}>
            <Card
              className={`h-100 border-0 shadow-sm rounded-3 text-center card-hover-effect ${selectedRoom?.id === room.id ? 'ring-primary border border-2 border-primary' : ''}`}
              style={{ cursor: "pointer" }}
              onClick={() => selectRoom(room)}
            >
              <Card.Body className="p-3 d-flex flex-column align-items-center justify-content-center">
                <h6 className="fw-bold text-secondary mb-2">
                  {t.roomLabel} {room.room_number}
                </h6>
                <Badge
                  bg={
                    room.current_status === "AVAILABLE" ? "success" :
                      room.current_status === "RESERVED" ? "warning" :
                        room.current_status === "OCCUPIED" ? "danger" :
                          room.current_status === "CLEANING" ? "info" :
                            room.current_status === "OUT_OF_SERVICE" ? "secondary" :
                              "secondary"
                  }
                  className={`px-2.5 py-1.5 rounded-pill fw-semibold ${room.current_status === "RESERVED" ? "text-dark" : ""}`}
                >
                  {isEnglish
                    ? room.current_status
                    : room.current_status === "AVAILABLE"
                      ? t.available
                      : room.current_status === "RESERVED"
                        ? t.reserved
                        : room.current_status === "OCCUPIED"
                          ? t.occupied
                          : room.current_status
                  }
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedRoom && (
        <Card className="mt-4 border-0 shadow rounded-4 bg-white overflow-hidden animate-fade-in">
          <div className={`card-header bg-dark text-white fw-bold py-3 ${textAlignClass}`}>
            {t.roomLabel} {selectedRoom.room_number} — {t.statusLabel}
          </div>
          <Card.Body className={`p-4 ${textAlignClass}`}>
            <div className="d-flex align-items-center mb-3">
              <span className="text-muted small fw-bold text-uppercase tracking-wider me-2 ms-2">{t.statusLabel}:</span>
              <Badge bg={selectedRoom.current_status === "AVAILABLE" ? "success" : 
                selectedRoom.current_status === "RESERVED" ? "warning" : "danger"
                } className={selectedRoom.current_status === "RESERVED" ? "text-dark" : ""}>
                {isEnglish ? selectedRoom.current_status : (selectedRoom.current_status === "AVAILABLE" ?
                   t.available : selectedRoom.current_status === "RESERVED" ? t.reserved : t.occupied)}
              </Badge>
            </div>
            <hr className="my-3 opacity-25" />

            {selectedReservation ? (
              <Row className="g-3">
                <Col xs={12} md={6}>
                  <p className="mb-2"><strong className="text-secondary">{t.guestLabel}:</strong> <span className="text-dark fw-semibold">{selectedReservation.first_name} {selectedReservation.last_name}</span></p>
                  <p className="mb-2"><strong className="text-secondary">{t.bookingLabel}:</strong> <span className="font-monospace text-primary fw-bold text-uppercase">{selectedReservation.booking_reference}</span></p>
                  <p className="mb-0"><strong className="text-secondary">{t.packageLabel}:</strong> <span className="text-dark small">{currentPackage || "—"}</span></p>
                </Col>
                <Col xs={12} md={6}>
                  <p className="mb-2"><strong className="text-secondary">{t.checkInLabel}:</strong> <span className="text-muted font-monospace small">{selectedReservation.check_in}</span></p>
                  <p className="mb-0"><strong className="text-secondary">{t.checkOutLabel}:</strong> <span className="text-muted font-monospace small">{selectedReservation.check_out}</span></p>
                </Col>
              </Row>
            ) : (
              <div className="alert alert-success d-inline-block w-100 mb-0 border-0 shadow-sm py-3 px-4 rounded-3">
                {t.availableMessage}
              </div>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
export default RoomDashboard;