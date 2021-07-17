const dbConnect = require("mysql2");

const connection = dbConnect.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "vaultdragondb"
});

connection.connect(error => {
	if (error) {
		console.error("Error connecting to db: ", error.stack);
		throw new Error(error);
	}

	console.log("Connected to DB!");
});

module.exports = connection;
