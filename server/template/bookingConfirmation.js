const hotel = require("../config/hotelConfig");

const formatDate = require("../utils/formatDate");

module.exports = function bookingConfirmation(reservation) {
const manageUrl =`${process.env.CLIENT_URL}/manage-reservation?ref=${reservation.booking_reference}`;
    return `

    <div style="font-family:Arial,sans-serif">

        <h2>
            Reservation Confirmed
        </h2>

        <p>

            Dear
            <strong>

                ${reservation.first_name}

                ${reservation.last_name}

            </strong>,

        </p>

        <p>

            Thank you for choosing
            <strong>

                ${hotel.hotelName}

            </strong>.

        </p>

        <hr>

        <h3>

            Reservation Details

        </h3>

        <table>

            <tr>

                <td>
                    Booking Reference
                </td>

                <td>

                    ${reservation.booking_reference}

                </td>

            </tr>

            <tr>
                <td>
                    Room
                </td>
                <td>
                    ${reservation.rooms.room_number}
                </td>
            </tr>

            <tr>
                <td>
                    Package
                </td>
                <td>
                    ${reservation.packages.name_en}
                </td>

            </tr>

            <tr>

                <td>
                    Check In
                </td>

                <td>

                    ${formatDate(reservation.check_in)}

                </td>

            </tr>

            <tr>

                <td>
                    Check Out
                </td>

                <td>

                    ${formatDate(reservation.check_out)}

                </td>

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

            We look forward to welcoming you.

        </p>

        <hr>

        <p>

            ${hotel.hotelName}

            <br>

            ${hotel.address}

            <br>

            ${hotel.hotelPhone}

            <br>

            ${hotel.hotelEmail}

        </p>
<hr style="margin:30px 0;">

<h3>Need to manage your reservation?</h3>

<p>

You can view your reservation details or cancel your reservation anytime before arrival.

</p>

<p>
<a href="${manageUrl}"
style="
display:inline-block;
padding:12px 24px;
background:#f4b400;
color:#000;
text-decoration:none;
border-radius:4px;
font-weight:bold;
"

>

Manage Reservation

</a>

</p>
    </div>

    `;

};