const express = require("express");
const router = express.Router();
const storeRouter = require("./storeRouter");

router.use("/", storeRouter);

module.exports = router;
