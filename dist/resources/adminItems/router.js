"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const constroller_1 = require("./constroller");
const router = (0, express_1.Router)();
router.post("/", constroller_1.addItem);
router.delete("/:id", constroller_1.deleteItem);
exports.default = router;
