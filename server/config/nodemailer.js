// const { Resend } = require("resend");

// const resend = new Resend(process.env.EMAIL_USER);

// module.exports = resend;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

     host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
      connectionTimeout: 5000, 
    greetingTimeout: 5000,   
    socketTimeout: 5000, 

});
// transporter.verify(function (error, success) {
//     if (error) {
//         console.error("Mailer Error:", error);
//     } else {
//         console.log("Mailer is ready.");
//     }
//});
module.exports = transporter;