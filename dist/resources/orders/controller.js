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
exports.updateOrder = exports.getOrdersById = exports.deleteOrder = exports.getOrders = exports.createOrder = void 0;
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
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield dbClient_1.default.order.findMany();
        res.status(200).json({ data: orders });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});
exports.getOrders = getOrders;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const removed = yield dbClient_1.default.order.delete({
            where: { id },
        });
        res.json({ data: "deleted" });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.deleteOrder = deleteOrder;
const getOrdersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_ID = Number(req.params.user_ID);
    try {
        const orders = yield dbClient_1.default.order.findMany({
            where: {
                user_ID,
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
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const newStatus = req.body;
    try {
        const foundOrder = yield dbClient_1.default.order.findUnique({
            where: { id },
        });
        if (foundOrder) {
            const updatedOrder = yield dbClient_1.default.order.update({
                where: { id },
                data: Object.assign(Object.assign({}, foundOrder), newStatus),
            });
            res.json({ msg: updatedOrder });
        }
        else {
            res.json({ msg: `ID ${id} not found` });
        }
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.updateOrder = updateOrder;
