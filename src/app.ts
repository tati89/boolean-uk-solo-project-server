import express from "express";
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
import { Request, Response } from "express-serve-static-core";

declare global {
  namespace Express {
    interface Request {
      currentUserId: number;
    }
  }
}

//import routes
import usersRouter from "./resources/users/router";
import authRouter from "./resources/auth/router";
import itemsRouter from "./resources/items/router";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

//run routes
app.use(authRouter);
app.use("/users", usersRouter);
app.use("/items", itemsRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json("No route match");
});

module.exports = app;
