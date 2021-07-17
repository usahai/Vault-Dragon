const dbConnect = require("mysql2");

console.log("[DBC] env: ", process.env.NODE_ENV);
console.log("[DBC] host: ", process.env.DB_HOST);
console.log("[DBC] user: ", process.env.DB_USER);
console.log("[DBC] pass: ", process.env.DB_PASS);

const connection = dbConnect.createConnection({
	host: process.env.DB_HOST,
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
