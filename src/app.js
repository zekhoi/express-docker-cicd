require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("./middlewares/morgan.middleware");

const router = require("./routes");

const app = express();

app.use(morgan);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

module.exports = app;
