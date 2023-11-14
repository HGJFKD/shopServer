"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserServer = void 0;
const insertNewUser_1 = require("../DL/insertNewUser");
const isUser_1 = __importDefault(require("../helpers/isUser"));
async function addUserServer(user) {
    if (await (0, isUser_1.default)(user)) {
        throw new Error('User exist');
    }
    else {
        const res = await (0, insertNewUser_1.insertNewUser)(user);
        // const token: Record<string, JWTCode> = createJWTToken(user);
        return res;
    }
}
exports.addUserServer = addUserServer;
