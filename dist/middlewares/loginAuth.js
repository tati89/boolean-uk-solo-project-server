"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authGenrator_1 = require("../utils/authGenrator");
exports.default = (req, res, next) => {
    const token = req.cookies.token;
    let payload = null;
    if (token) {
        payload = (0, authGenrator_1.validateToken)(token);
    }
    if (payload) {
        //create new property and store payload in it
        req.currentUserId = payload.id;
        //continue normal go through routes
        next();
    }
    else {
        res.status(401).json({ err: "You must be logged in to access this data" });
    }
};
