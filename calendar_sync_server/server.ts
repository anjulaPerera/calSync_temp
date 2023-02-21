require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const databaseSetup = require("./startup/database");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

// app.use("/api/auth", Authentication.verifyToken);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var option = require("./routes/index");

app.use("/schedule/option/", option.router);

app.use(function (req: any, res: any) {
  res.status(404).send({
    url: req.originalUrl + " not found",
  });
});

app.listen(PORT, () => {
  console.log("Server successfully started at port " + PORT);
});

databaseSetup();
