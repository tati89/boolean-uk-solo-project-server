"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
//import routes
const router_1 = __importDefault(require("./resources/users/router"));
const router_2 = __importDefault(require("./resources/auth/router"));
const router_3 = __importDefault(require("./resources/items/router"));
const router_4 = __importDefault(require("./resources/categories/router"));
const router_5 = __importDefault(require("./resources/basket/router"));
const router_6 = __importDefault(require("./resources/basketItems/router"));
const router_7 = __importDefault(require("./resources/orders/router"));
var app = (0, express_1.default)();
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
//run routes
app.use(router_2.default);
app.use("/users", router_1.default);
app.use("/items", router_3.default);
app.use("/categories", router_4.default);
app.use("/basket", router_5.default);
app.use("/basket-items", router_6.default);
app.use("/orders", router_7.default);
app.all("*", (req, res) => {
    res.status(404).json("No route match");
});
module.exports = app;
