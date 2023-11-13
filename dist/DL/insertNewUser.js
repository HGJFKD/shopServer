"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertNewUser = void 0;
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function insertNewUser(user) {
    const { name, email, password, cart } = user;
    const res = await typeUserModel_1.default.create({ name: name, email: email, password: password, cart: cart });
    return res;
}
exports.insertNewUser = insertNewUser;
