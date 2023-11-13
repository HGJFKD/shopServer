"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const connectToMongoDB_1 = require("./connectToMongoDB");
async function getUser(userRegister) {
    const { name, email, password } = userRegister;
    const res = await connectToMongoDB_1.client.query('select * from users.users where user_name = $1, or email = $2, or password = $3', [name, email, password]);
    connectToMongoDB_1.client.end();
    return res.rowCount;
}
exports.getUser = getUser;
