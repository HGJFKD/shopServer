"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverUpdateCartByUser = void 0;
const updateCartByUser_1 = require("../DL/updateCartByUser");
const isUser_1 = __importDefault(require("../DL/isUser"));
async function serverUpdateCartByUser(user) {
    const { isUserBollean } = await (0, isUser_1.default)(user);
    if (!isUserBollean) {
        throw new Error('We did not find such a user');
    }
    const res = await (0, updateCartByUser_1.updateCartByUser)(user);
    if (!res) {
        throw new Error();
    }
    else {
        return res;
    }
}
exports.serverUpdateCartByUser = serverUpdateCartByUser;
