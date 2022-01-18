import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/routers";
import config from "./config/config";

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
