const supabase = require("../config/supabase");
const emailService = require("../services/emailService");
const bookingConfirmation = require("../template/bookingConfirmation");
const generateBookingReference = require("../utils/generateBookingReference");



// const createBooking = async (req, res) => {

//     try {

//         const { first_name, last_name, email, phone, adults,
//             children, rooms_requested, check_in, check_out, package_id,
//             room_id, special_requests, payment_method, payment_status, total_amount } = req.body;

//         const { data: existingBooking, error: bookingError } = await supabase
//             .from("bookings").select("id").eq("room_id", room_id).eq("status", "CONFIRMED").lt("check_in", check_out).gt("check_out", check_in)
//             .maybeSingle();

//         if (bookingError) {
//             throw bookingError;
//         }
//         console.log("existing booking is :", existingBooking);

//         if (existingBooking) {
//             return res.status(409).json({
//                 success: false,
//                 message: "Sorry, this room has just been reserved. Please choose another room."
//             });
//         }
//         const bookingReference = generateBookingReference();

//         console.log("Incoming booking body:");
// console.log(req.body);
// console.log("Incoming total_amount:", total_amount);
//         const { data, error } = await supabase

//             .from("bookings")

//             .insert([
//                 {
//                     first_name, last_name, email, phone, adults, children, booking_reference: bookingReference,
//                     rooms_requested, check_in, check_out, package_id, room_id, 
//                     special_requests,total_amount, payment_method,payment_status, status: "CONFIRMED"
//                 }
//             ])
//             .select()
//             .single();
//         console.log("\nBOOKING SAVED");
//         console.log(data);
//         console.log("---------------------------\n");

//         if (error) { console.error(error); }

//         const bookingId = data.id;

//         const { data: reservation, error: reservationError } =
//             await supabase
//                 .from("bookings")
//                 .select(`  id,  booking_reference,  first_name,  last_name,  email,  phone,  adults,  children, 
//                      rooms_requested,  check_in,  
//                      check_out,  special_requests,payment_method,payment_status,total_amount ,   status,
//                  rooms (
//                  room_number
//                 ),
//                 packages (     id,      name_en,      name_ar,       price_per_night  )
//                `)
//                 .eq("id", bookingId)
//                 .single();

//         if (reservationError) {
//             console.error(reservationError);
//             return res.status(500).json({ success: false, message: "Unable to load reservation." });
//         }
//         console.log(" reservation confirmed : ", reservation)
//         try {

//             await emailService.sendEmail({
//                 to: reservation.email,
//                 subject:
//                     `Booking Confirmation - ${reservation.booking_reference}`,
//                 html:
//                     bookingConfirmation(reservation)
//             });
//             console.log("Confirmation email sent.");
//         }
//         catch (emailError) {
//             console.error("Email Error");
//             console.error(emailError);
//         }
//           return res.status(201).json({      success: true, reservation  });
//     }

//     catch (err) {
//         console.error(err)
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }


// };
const bookingService = require("../services/bookingService");

const createBooking = async (req, res) => {

    try {

        const reservation =
            await bookingService.createBooking(
                req.body
            );

        return res.status(201).json({

            success: true,

            reservation

        });

    }

    catch (error) {

        return res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    createBooking

};