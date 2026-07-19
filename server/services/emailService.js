const transporter = require("../config/nodemailer");

async function sendEmail({ to, subject, html , bookingReference}) {

     try {
        const qrCode = await QRCode.toDataURL(bookingReference);
        const emailHtml = ` ${html}
            <hr>
            <div style="text-align:center">
                <h3>Reception QR Code</h3>
                <img src="${qrCode}" width="170" />
            </div>
        `;
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "api-key": process.env.BREVO_API_KEY,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                sender: {
                    name: "VISTART",
                    email: process.env.EMAIL_FROM
                },
                to: [{ email: to }],
                subject: subject,
                htmlContent: emailHtml
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Brevo API Error: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return data;

    }
    catch (error) {
        console.error("Email send failed:", error);
        throw error;

    }
    // try {
    //     const info = await transporter.sendMail({
    //         from: `"VISTARA" <${process.env.EMAIL_USER}>`,
    //         to, subject, html
    //     });
    //     console.log("Email sent:", info.messageId);
    //     return info;
    // }
    // catch (error) {
    //     console.error("Email send failed:", error);
    //     throw error;

    // }

}

module.exports = { sendEmail };