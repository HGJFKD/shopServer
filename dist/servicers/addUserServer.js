"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserServer = void 0;
const insertNewUser_1 = require("../DL/insertNewUser");
const isUser_1 = __importDefault(require("../DL/isUser"));
async function addUserServer(user) {
    const result = await (0, isUser_1.default)(user, 'email');
    const { isUserBollean } = result;
    if (isUserBollean) {
        throw new Error('User exist');
    }
    else {
        const res = await (0, insertNewUser_1.insertNewUser)(user);
        const { name, _id } = res;
        const resSignUp = {
            user_name: name,
            user_id: _id
        };
        return resSignUp;
    }
}
exports.addUserServer = addUserServer;
