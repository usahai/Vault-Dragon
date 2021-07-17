const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

const appRouter = require("./routes");

app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use("/", appRouter);

app.listen(process.env.PORT, () => {
	console.log(`App listening at http://localhost:${process.env.PORT}`);
});

app.on("error", () => {
	console.log("Unable to start server");
});
