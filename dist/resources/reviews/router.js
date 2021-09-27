"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get("/", controller_1.getReviews);
router.post("/", controller_1.addReview);
exports.default = router;
