const connection = require("../config/dbConnection");

const getQuery = `SELECT * FROM keyvaluepairs kvp WHERE kvp.key=? ORDER BY created_date DESC LIMIT 1`;
const getTimeStampQuery = `SELECT * FROM keyvaluepairs kvp WHERE kvp.key=? AND created_date<=? ORDER BY created_date DESC LIMIT 1`;
const postQuery = `INSERT INTO keyvaluepairs (\`key\`,\`value\`) VALUES (?, ?)`;

exports.fetchKeyValuePairDAO = async key => {
	try {
		let response = await connection
			.promise()
			.query(getQuery, [key])
			.then(([rows]) => rows);

		return response;
	} catch (error) {
		console.error("[dao] error: ", error);
		throw new Error(error);
	}
};

exports.fetchKeyValuePairWithTimestampDAO = async (key, timestamp) => {
	try {
		let response = await connection
			.promise()
			.query(getTimeStampQuery, [key, timestamp])
			.then(([rows]) => rows);

		return response;
	} catch (error) {
		console.error("[dao] error: ", error);
		throw new Error(error);
	}
};

exports.insertKeyValuePairDAO = async (key, value) => {
	try {
		let response = await connection
			.promise()
			.query(postQuery, [key, value])
			.then(([rows]) => rows);

		return response;
	} catch (error) {
		console.error("[dao] post error: ", error);
		throw new Error(error);
	}
};
