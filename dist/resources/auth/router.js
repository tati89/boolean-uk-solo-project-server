"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
// login
router.route("/login").post(controller_1.login);
router.route("/logout").get(controller_1.logout);
router.route("/signup").post(controller_1.signUp);
router.route("/validate-token").get(controller_1.validateLoggedInToken);
exports.default = router;
