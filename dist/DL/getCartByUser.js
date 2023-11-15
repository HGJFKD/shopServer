"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartByUser = void 0;
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function getCartByUser(_id) {
    const res = await typeUserModel_1.default.findById({ _id }).exec();
    if (res) {
        return res;
    }
    else {
        return null;
    }
}
exports.getCartByUser = getCartByUser;
