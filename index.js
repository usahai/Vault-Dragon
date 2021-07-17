const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 3000;
const appRouter = require("./routes");

app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use("/", appRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

app.on("error", () => {
	console.log("Unable to start server");
});
