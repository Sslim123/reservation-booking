import moment from "moment";

let BookingLength = props => {
  return (
    moment(props.guest.checkOutDate).diff(
      moment(props.guest.checkInDate),
      "days"
    ) + "-  Days"
  );
};

export default BookingLength;
