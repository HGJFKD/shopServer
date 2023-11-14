"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
async function getUser(userRegister) {
    const { name, email, password } = userRegister;
    const res = await client.query('select * from users.users where user_name = $1, or email = $2, or password = $3', [name, email, password]);
    client.end();
    return res.rowCount;
}
exports.getUser = getUser;
