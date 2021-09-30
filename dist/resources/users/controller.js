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
exports.updateUser = exports.deleteUser = exports.getUser = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const user = yield dbClient_1.default.user.findUnique({
            where: {
                id,
            },
        });
        res.json({ data: user });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const deletedUser = yield dbClient_1.default.user.delete({
            where: {
                id,
            },
        });
        res.json({ data: "success" });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.user_ID);
    const newInfo = req.body;
    try {
        const userExist = yield dbClient_1.default.user.findFirst({
            where: { id },
        });
        if (userExist) {
            const updated = yield dbClient_1.default.user.update({
                where: { id },
                data: Object.assign({}, newInfo),
            });
            res.status(201).json({ data: updated });
        }
        else {
            res.status(500).json({ msg: `Can't find user with ID ${id}` });
        }
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.updateUser = updateUser;
