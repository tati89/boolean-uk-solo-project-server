import express from "express";
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
import { Request, Response } from "express-serve-static-core";
import { User } from ".prisma/client";

declare global {
  namespace Express {
    interface Request {
      currentUser: User;
    }
  }
}

//import routes
import usersRouter from "./resources/users/router";
import authRouter from "./resources/auth/router";
import itemsRouter from "./resources/items/router";
import categoriesRouter from "./resources/categories/router";
import basketRouter from "./resources/basket/router";
import basketItemsRouter from "./resources/basketItems/router";
import ordersRouter from "./resources/orders/router";
import reviewsRouter from "./resources/reviews/router";
import userOrdersRouter from "./resources/userOrders/router";
import customersRouter from "./resources/customers/router";
import adminItemsRouter from "./resources/adminItems/router";
import router from "./resources/meRouter/router";
import loginAuth from "./middlewares/loginAuth";
import adminAuth from "./middlewares/adminAuth";

var app = express();
const clientUrl = process.env.FRONTEND_URLL;

app.use(logger("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

//run routes

app.use("/users", usersRouter);
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);
app.use("/reviews", reviewsRouter);
app.use(authRouter);
app.use(loginAuth);
app.use("/basket", basketRouter);
app.use("/basket-items", basketItemsRouter);
app.use("/user-orders", userOrdersRouter);

app.use(adminAuth);
app.use("/admin-items", adminItemsRouter);
app.use("/customers", customersRouter);
app.use("/orders", ordersRouter);
app.use("/me", router);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json("No route match");
});

module.exports = app;
