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
const dbClient_1 = __importDefault(require("../../utils/dbClient"));
const bcrypt_1 = require("bcrypt");
// export type NewUser = {
//   firstName: string;
//   lastName: string;
//   password: string;
//   username: string;
//   agreedToNews: boolean;
//   avatar: string;
//   phone?: string;
//   email?: string;
// };
const createWithHash = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const textPassword = newUser.password;
    const hashedPassword = yield (0, bcrypt_1.hash)(textPassword, 10);
    const savedUser = yield dbClient_1.default.user.create({
        data: Object.assign(Object.assign({}, newUser), { password: hashedPassword }),
    });
});
const userClient = Object.assign(Object.assign({}, dbClient_1.default.user), { createWithHash });
exports.default = userClient;
