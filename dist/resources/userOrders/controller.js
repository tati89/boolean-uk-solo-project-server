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
exports.getOrdersById = exports.createOrder = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_ID = Number(req.params.user_ID);
    const newOrder = req.body;
    try {
        const basketExist = yield dbClient_1.default.basket.findFirst({
            where: { user_ID },
        });
        if (basketExist) {
            const created = yield dbClient_1.default.order.create({
                data: Object.assign({}, newOrder),
            });
            res.status(201).json({ data: created });
        }
        else {
            res.status(500).json({ msg: `Can't find basket with ID ${user_ID}` });
        }
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.createOrder = createOrder;
const getOrdersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_ID = Number(req.params.user_ID);
    try {
        const orders = yield dbClient_1.default.order.findMany({
            where: {
                user_ID,
            },
            orderBy: {
                id: "desc",
            },
        });
        res.json({ data: orders });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.getOrdersById = getOrdersById;
