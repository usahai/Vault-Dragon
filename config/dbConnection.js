const dbConnect = require("mysql2");

const connection = dbConnect.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE
});

connection.connect(error => {
	if (error) {
		console.error("Error connecting to db: ", error.stack);
		throw new Error(error);
	}

	console.log("Connected to DB!");
});

module.exports = connection;
