"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const connectToDB_1 = require("./connectToDB");
async function getUser(userRegister) {
    const { userName, email, password } = userRegister;
    const res = await connectToDB_1.client.query('select * from users.users where user_name = $1, or email = $2, or password = $3', [userName, email, password]);
    connectToDB_1.client.end();
    return res.rowCount;
}
exports.getUser = getUser;
