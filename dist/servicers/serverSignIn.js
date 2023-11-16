"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSignIn = void 0;
const isUser_1 = __importDefault(require("../DL/isUser"));
const createJWTToken_1 = require("../auth/createJWTToken");
const getUserId_1 = require("../DL/getUserId");
async function serverSignIn(user) {
    const result = await (0, isUser_1.default)(user, 'email');
    const { isUserBollean, errorMessage } = result;
    if (!isUserBollean) {
        throw new Error(errorMessage);
    }
    else {
        const user_id = await (0, getUserId_1.getUserId)(user);
        console.log(user_id);
        const token = (0, createJWTToken_1.createJWTToken)(user_id);
        return token;
    }
}
exports.serverSignIn = serverSignIn;
