"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSignIn = void 0;
const isUser_1 = __importDefault(require("../helpers/isUser"));
async function serverSignIn(user) {
    if (!await (0, isUser_1.default)(user)) {
        throw new Error('User is not registered');
    }
    else {
        // const token: Record<string, JWTCode> = createJWTToken(user);
        // return token;
        return '';
    }
}
exports.serverSignIn = serverSignIn;
