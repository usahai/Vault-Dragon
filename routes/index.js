const express = require("express");
const router = express.Router();

router.use("/", require("./v1.0"));

module.exports = router;
