const express = require("express");
const router = express.Router();
const storeRouter = require("./storeRouter");

router.use("/object", storeRouter);

module.exports = router;
