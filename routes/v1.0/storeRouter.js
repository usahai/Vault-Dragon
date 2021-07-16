const express = require("express");
const router = express.Router();

router.get("/object", async (req, res, next) => {
	try {
		// some service here
		let response = "this works";

		console.log("it gets here");

		res.status(200).send(response);
	} catch (error) {
		res.status(404).send("Some error found");
	}
});

module.exports = router;
