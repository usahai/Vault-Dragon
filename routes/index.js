const express = require("express");
const router = express.Router();

router.use("/", require("./v1.0"));

router.get("/", async (req, res, next) => {
	try {
		res.status(200).send("Node server is up and running");
	} catch (error) {
		res.send(400).send("Failed to set up node server");
	}
});

module.exports = router;
