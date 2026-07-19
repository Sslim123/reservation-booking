const crypto = require("crypto");

const generateBookingReference = () => {

    const random = crypto
        .randomBytes(3)
        .toString("hex")
        .toUpperCase();

    return `CYF-${random}`;
};

module.exports = generateBookingReference;