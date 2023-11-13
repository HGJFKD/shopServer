"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverTopCategories = void 0;
const getTopCategories_1 = __importDefault(require("../DL/getTopCategories"));
async function serverTopCategories() {
    const res = await (0, getTopCategories_1.default)();
    if (!res) {
        throw new Error('We did not find such category');
    }
    else {
        return res;
    }
}
exports.serverTopCategories = serverTopCategories;
