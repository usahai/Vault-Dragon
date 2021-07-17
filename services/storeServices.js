const { response } = require("express");
const storeDAO = require("../dao/storeDao");

const convertMillsToTime = ms => new Date(parseInt(ms)).toISOString().slice(0, 19).replace("T", " ");

exports.fetchKeyValuePair = async key => {
	try {
		let resp = await storeDAO.fetchKeyValuePairDAO(key);

		resp = {
			value: resp[0].value
		};

		return resp;
	} catch (error) {
		console.error("[SS] error: ", error);
		throw new Error(error);
	}
};

exports.fetchKeyValuePairWithTimestamp = async (key, timestamp) => {
	try {
		let resp = await storeDAO.fetchKeyValuePairWithTimestampDAO(key, convertMillsToTime(timestamp));

		resp = {
			value: resp[0].value
		};

		return resp;
	} catch (error) {
		console.error("[SS] error: ", error);
		throw new Error(error);
	}
};

exports.insertKeyValuePair = async (key, value) => {
	try {
		let resp = await storeDAO.insertKeyValuePairDAO(key, value);

		return resp;
	} catch (error) {
		console.error("error: ", error);
		throw new Error(error);
	}
};
