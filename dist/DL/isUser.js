"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeUserModel_1 = __importDefault(require("../Types/typeUserModel"));
async function isUser(user, filter) {
    const { _id, email, password } = user;
    let errorMessage;
    let isUserBollean;
    let res;
    if (filter === '_id') {
        res = await typeUserModel_1.default.find({ _id: _id });
        if (!res) {
            errorMessage = 'We did not find such a user';
            isUserBollean = false;
        }
        else {
            errorMessage = 'successful';
            isUserBollean = true;
        }
        return { isUserBollean: isUserBollean, errorMessage: errorMessage };
    }
    else {
        res = await typeUserModel_1.default.find({ email: email });
        if (Object.keys(res).length <= 0) {
            errorMessage = "User not found";
            isUserBollean = false;
        }
        else {
            const user_password = res[0].password;
            if (user_password !== password) {
                errorMessage = "Incorrect password";
                isUserBollean = false;
            }
            else {
                errorMessage = "Login successful";
                isUserBollean = true;
            }
        }
        return { isUserBollean: isUserBollean, errorMessage: errorMessage };
    }
}
exports.default = isUser;
