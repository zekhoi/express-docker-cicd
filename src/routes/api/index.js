const express = require("express");
const exampleRoute = require("./example.route");

const APIRouter = express.Router();

APIRouter.use(exampleRoute);

module.exports = APIRouter;
