"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function isUser(user) {
    const { email, password } = user;
    let errorMessage;
    const res = await typeUserModel_1.default.find({ email: email });
    const user_password = res[0].password;
    (Object.keys(res).length <= 0);
    {
        errorMessage = "User not found";
    }
    if (user_password !== password) {
        errorMessage = "Incorrect password";
    }
    else {
        errorMessage = "Login successful";
    }
    const isUserBollean = (errorMessage === "Login successful") ? true : false;
    return { isUserBollean: isUserBollean, errorMessage: errorMessage };
}
exports.default = isUser;
