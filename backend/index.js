require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./src/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9001;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRoutes);

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((er) => {
    console.log({ message: "DB connection unsuccessful!", error: er });
  });

app.listen(port, () => {
  console.log("Server is running on port", port);
});
