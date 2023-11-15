"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function isUser(user) {
    const { email } = user;
    const res = await typeUserModel_1.default.find({ email: email });
    const { name, _id } = res;
    const isUserBollean = Object.keys(res).length > 0 ? true : false;
    return isUserBollean;
}
exports.default = isUser;
