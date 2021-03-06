"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbClient_1 = __importDefault(require("../utils/dbClient"));
const adminAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAdmin = yield dbClient_1.default.user.findUnique({
        where: {
            id: Number(req.currentUser.id),
        },
    });
    if (foundAdmin.role === "admin") {
        next();
    }
    else {
        res.status(403).json({ error: "You're not an admin!" });
    }
});
exports.default = adminAuth;
