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
exports.updateItem = exports.deleteItem = exports.addItem = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = req.body;
    try {
        const added = yield dbClient_1.default.item.create({
            data: Object.assign(Object.assign({}, newItem), { price: Number(newItem.price), category_ID: Number(newItem.category_ID) }),
        });
        res.json({ data: added });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.addItem = addItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const removed = yield dbClient_1.default.item.delete({
            where: { id },
        });
        res.json({ data: "Successfully removed from the system" });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.deleteItem = deleteItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const info = req.body;
    console.log(info);
    try {
        const ifExist = yield dbClient_1.default.item.findUnique({
            where: { id },
        });
        if (ifExist) {
            const updated = yield dbClient_1.default.item.update({
                where: { id },
                data: Object.assign({}, info),
            });
            res.json({ data: updated });
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
exports.updateItem = updateItem;
