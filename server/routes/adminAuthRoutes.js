const  router = require("express").Router();
const {auth} = require('../middleware/auth')
const {  login} = require("../controller/adminAuthController");

router.post("/admin/login", login);

module.exports = router;