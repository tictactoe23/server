const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routers");
const config = require("./config/config");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", routes);

app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: "Not found" });
});

app.listen(config.PORT, () =>
  console.log(`Server started: http://localhost:${config.PORT}`)
);
