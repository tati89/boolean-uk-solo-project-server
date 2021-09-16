"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../users/controller");
const controller_2 = require("./controller");
const router = (0, express_1.Router)();
// login
router.route("/login").post(controller_2.login);
router.route("/logout").get(controller_2.logout);
router.route("/signup").post(controller_1.addUser);
router.route("/validate-token").get(controller_2.validateLoggedInToken);
exports.default = router;
