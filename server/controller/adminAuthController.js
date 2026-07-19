// controllers/adminAuthController.js

const service = require("../services/adminAuthService");

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const result = await service.login(        email,       password  );

        return res.json({

            success: true,

            token: result.token,

            staff: {

                id: result.staff.id,

                first_name: result.staff.first_name,

                last_name: result.staff.last_name,

                role: result.staff.role

            }

        });

    }

    catch (error) {

        return res.status(401).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    login

};