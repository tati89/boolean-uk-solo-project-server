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
exports.deleteBasket = exports.addBasket = exports.getUserBasket = exports.getBasket = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
const getBasket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_ID = Number(req.params.user_ID);
    try {
        const foundBasket = yield dbClient_1.default.basket.findFirst({
            where: { user_ID },
            include: {
                items: {
                    orderBy: {
                        id: "asc",
                    },
                },
            },
        });
        res.json({ data: foundBasket });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.getBasket = getBasket;
const getUserBasket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_ID = Number(req.params.user_ID);
    const basketToCreate = req.body;
    try {
        const foundBasket = yield dbClient_1.default.basket.findFirst({
            where: { user_ID },
            include: { items: true },
        });
        if (!foundBasket) {
            const newBasket = yield dbClient_1.default.basket.create({
                data: Object.assign({}, basketToCreate),
                include: { items: true },
            });
            res.json({ data: newBasket });
        }
        else {
            res.json({ data: foundBasket });
        }
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.getUserBasket = getUserBasket;
const addBasket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBasket = req.body;
    try {
        const added = yield dbClient_1.default.basket.create({
            data: Object.assign({}, newBasket),
        });
        res.json({ data: added });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.addBasket = addBasket;
const deleteBasket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const removed = yield dbClient_1.default.basket.delete({
            where: { id },
        });
        res.json({ msg: "removed" });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.deleteBasket = deleteBasket;
