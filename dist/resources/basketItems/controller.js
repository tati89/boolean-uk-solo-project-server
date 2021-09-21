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
exports.deleteItem = exports.updateItemQty = exports.addItemOrIncreaseQty = exports.getItems = void 0;
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allInBasket = yield dbClient_1.default.basketItem.findMany();
        res.json({ data: allInBasket });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.getItems = getItems;
const addItemOrIncreaseQty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { qty, basket_ID, item_ID } = req.body;
    try {
        const alreadyInBasket = yield dbClient_1.default.basketItem.findFirst({
            where: {
                item_ID: Number(item_ID),
            },
        });
        const basketExist = yield dbClient_1.default.basket.findUnique({
            where: {
                id: Number(basket_ID),
            },
        });
        if (!basketExist) {
            res.json({ msg: `Basket with ID ${basket_ID} doesn't exict` });
        }
        else if (alreadyInBasket) {
            const updatedQty = yield dbClient_1.default.basketItem.update({
                where: {
                    id: alreadyInBasket.id,
                },
                data: Object.assign(Object.assign({}, alreadyInBasket), { qty: alreadyInBasket.qty + Number(qty) }),
            });
            res.json({ data: updatedQty });
        }
        else {
            const newBasketItem = yield dbClient_1.default.basketItem.create({
                data: {
                    qty,
                    basket_ID,
                    item_ID,
                },
            });
            res.json({ data: newBasketItem });
        }
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.addItemOrIncreaseQty = addItemOrIncreaseQty;
const updateItemQty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const { qty } = req.body;
    try {
        const foundItem = yield dbClient_1.default.basketItem.findUnique({
            where: { id },
        });
        if (foundItem) {
            const updatedItem = yield dbClient_1.default.basketItem.update({
                where: { id },
                data: Object.assign(Object.assign({}, foundItem), { qty: (foundItem === null || foundItem === void 0 ? void 0 : foundItem.qty) - Number(qty) }),
            });
            res.json({ data: updatedItem });
        }
        res.json({ msg: `No ${id} found` });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.updateItemQty = updateItemQty;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const deleted = yield dbClient_1.default.basketItem.delete({
            where: { id },
        });
        res.json({ msg: "Successfully removed from db" });
    }
    catch (error) {
        console.error(error);
        res.json({ error });
    }
});
exports.deleteItem = deleteItem;
