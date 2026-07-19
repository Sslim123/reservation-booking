const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const repository = require("../repositories/adminAuthRepository");

const login = async (email, password) => {

    const staff = await repository.findStaffByEmail(email);

    if (!staff) {

        throw new Error("Invalid email or password.");

    }

    const valid = await bcrypt.compare(   password,    staff.password_hash );

    if (!valid) {
        throw new Error("Invalid email or password.");
    }

    const token = jwt.sign(

        {

            id: staff.id,
            role: staff.role,
            email: staff.email
        },

        process.env.JWT_SECRET,

        {
            expiresIn: "8h"
        }

    );

    return {

        token,

        staff

    };

};

module.exports = {

    login

};