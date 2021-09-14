import express from "express";
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
import { Request, Response } from "express-serve-static-core";

//import routes

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

//run routes

app.all("*", (req: Request, res: Response) => {
  res.status(404).json("No route match");
});

module.exports = app;
