const express = require("express");
const router = express.Router();
const storeServices = require("../../services/storeServices");

router.post("/", async (req, res, next) => {
	let obj = req.body;
	try {
		let key = Object.keys(obj)[0];
		let value = Object.values(obj)[0];

		let response = await storeServices.insertKeyValuePair(key, value);

		console.log("[SR] response: ", response);

		res.status(200).send({
			key: key,
			value: value,
			timestamp: new Date().getTime()
		});
	} catch (error) {
		res.status(404).send("Unable to insert into DB");
	}
});

router.get("/:key", async (req, res, next) => {
	let key = req.params.key;
	let timestamp = req.query.timestamp;
	let response = [];

	try {
		if (timestamp) {
			response = await storeServices.fetchKeyValuePairWithTimestamp(key, timestamp);
		} else {
			response = await storeServices.fetchKeyValuePair(key);
		}

		res.status(200).send(response);
	} catch (error) {
		res.status(404).send("Unable to find key");
	}
});

module.exports = router;
