"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertNewUser = void 0;
const connectToDB_1 = require("./connectToDB");
async function insertNewUser(user) {
    const query = {
        text: 'INSERT INTO users.users (user_name, password) VALUES ($1, $2)',
        values: [user.user, user.password]
    };
    const res = await connectToDB_1.client.query(query);
    connectToDB_1.client.end();
    return res.command;
}
exports.insertNewUser = insertNewUser;
