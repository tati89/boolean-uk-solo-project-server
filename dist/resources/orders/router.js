"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get("/", controller_1.getOrders);
router.patch("/:id", controller_1.updateOrder);
router.delete("/:id", controller_1.deleteOrder);
exports.default = router;
