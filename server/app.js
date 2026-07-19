require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const adminAuthRoutes = require("./routes/adminAuthRoutes");
const bookingRoutes = require('./routes/bookingRoutes');
const checkAvailability  = require("./routes/bookingRoutes");
const packageRoutes = require("./routes/bookingRoutes");


const customerRoutes = require("./routes/customerRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const offerRoutes = require("./routes/offerRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const receptionRoutes = require("./routes/receptionRoutes");
const reportRoutes = require('./routes/reportRoutes');
const roomRoutes=require("./routes/roomRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api", adminAuthRoutes);
app.use('/api', bookingRoutes);
app.use("/api", checkAvailability);
app.use("/api", packageRoutes);


app.use("/api", customerRoutes);
app.use("/api", dashboardRoutes);
app.use("/api", offerRoutes);
app.use("/api", paymentRoutes);
app.use("/api", receptionRoutes);
app.use("/api", reportRoutes);
app.use("/api", roomRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'VISTARA API running'
  });
});
module.exports = app;