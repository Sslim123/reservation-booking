const hotel = require("../config/hotelConfig");
const formatDate = require("../utils/formatDate");

module.exports = function bookingCancelled(reservation) {

    return `

    <div style="font-family:Arial,sans-serif">

        <h2 style="color:#c0392b;">

            Reservation Cancelled

        </h2>
 <h3>

Cancellation Reason

</h3>

<p>

${reservation.cancellation_reason}

</p>
        <p>

            Dear
            <strong>

                ${reservation.first_name}
                ${reservation.last_name}

            </strong>,

        </p>

        <p>

            Your reservation at
            <strong>${hotel.hotelName}</strong>

            has been cancelled.

        </p>

        <hr>

        <table>

            <tr>

                <td><strong>Booking Reference</strong></td>

                <td>${reservation.booking_reference}</td>

            </tr>

            <tr>

                <td><strong>Room</strong></td>

                <td>${reservation.rooms.room_number}</td>

            </tr>

            <tr>

                <td><strong>Package</strong></td>

                <td>${reservation.packages.name_en}</td>

            </tr>

            <tr>

                <td><strong>Check In</strong></td>

                <td>${formatDate(reservation.check_in)}</td>

            </tr>

            <tr>

                <td><strong>Check Out</strong></td>

                <td>${formatDate(reservation.check_out)}</td>

            </tr>
                 </tr>
               <tr>
                <td>
                    Payments
                </td>
                <td>
                    ${reservation.payment_method}
                </td>
                 <td>
                    ${reservation.payment_status}
                </td>
                 <td>
                    ${reservation.total_amount}
                </td>
            </tr>
        </table>

        <br>

        <p>

            If this cancellation was unexpected,
            please contact our reception.

        </p>

        <hr>

        <p>

            ${hotel.hotelName}<br>

            ${hotel.hotelEmail}<br>

            ${hotel.hotelPhone}

        </p>

    </div>

    `;

};