"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.delete("/:id", controller_1.deleteUser);
router.get("/:id", controller_1.getUser);
exports.default = router;
