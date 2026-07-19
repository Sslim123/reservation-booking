
const paymentService = require("../services/paymentService");

const receivePayment = async (req, res) => {

    try {
console.log(req.body);
        const payment = await paymentService.receivePayment(req.body);
        return res.status(201).json({ success: true, payments });
    }
    catch (error) {

        console.error(error);
        return res.status(400).json({ success: false, message: error.message, stack: error.stack });

    }
    // catch (error) {
    //     return res.status(400).json({ success: false, message: error.message });
    // }
};

const getPayments = async (req, res) => {

    try {
        const payments = await paymentService.getPayments();
        return res.json({ success: true, payments });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { receivePayment, getPayments };