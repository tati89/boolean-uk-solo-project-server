"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get("/:id", controller_1.getUserBasket);
router.post("/", controller_1.addBasket);
router.delete("/:id", controller_1.deleteBasket);
exports.default = router;
