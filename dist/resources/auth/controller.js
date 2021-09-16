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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoggedInToken = exports.logout = exports.login = void 0;
const authGenrator_1 = require("../../utils/authGenrator");
const service_1 = require("./service");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCredentials = req.body;
    try {
        //1 check if credentials are valid
        //2 create token
        const loggedUser = yield (0, service_1.findUserWithValidation)(userCredentials);
        const token = (0, authGenrator_1.createToken)({
            id: loggedUser.id,
        });
        res.cookie("token", token, { httpOnly: true });
        res.json({
            data: {
                id: loggedUser.id,
                username: loggedUser.username,
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(401).json({ error });
    }
});
exports.login = login;
function logout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.clearCookie("token");
        res.json({ msg: "Succesfully logged out", data: null });
    });
}
exports.logout = logout;
function validateLoggedInToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.cookies.token;
        const tokenPayload = token && (0, authGenrator_1.validateToken)(token);
        if (tokenPayload) {
            const userData = yield (0, service_1.findUnique)({
                where: {
                    id: parseInt(tokenPayload.id),
                },
                select: {
                    username: true,
                },
            });
            res.json({ data: userData });
        }
        else {
            res.status(401).json({ err: "No valid token was found" });
        }
    });
}
exports.validateLoggedInToken = validateLoggedInToken;
