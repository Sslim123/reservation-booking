const router=require("express").Router();
//const {auth} = require('../middleware/auth');
const {getDashboardReport, getPackageReport } =require('../controller/reportController');


router.get("/reports/dashboard", getDashboardReport );
router.get("/report-packages", getPackageReport);
module.exports = router;