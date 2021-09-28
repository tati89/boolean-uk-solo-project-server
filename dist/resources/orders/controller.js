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
exports.updateOrder = exports.deleteOrder = exports.getOrders = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield dbClient_1.default.order.findMany({
            orderBy: {
                id: "desc",
            },
        });
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
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const info = req.body;
    console.log(info);
    try {
        const foundOrder = yield dbClient_1.default.order.findUnique({
            where: { id },
        });
        if (foundOrder) {
            const updatedOrder = yield dbClient_1.default.order.update({
                where: { id },
                data: Object.assign(Object.assign({}, foundOrder), { status: info.status }),
            });
            res.json({ data: updatedOrder });
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
