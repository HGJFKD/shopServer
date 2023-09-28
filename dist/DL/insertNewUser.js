"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertNewUser = void 0;
const connectToDB_1 = require("./connectToDB");
async function insertNewUser(user) {
    const { userName, email, password } = user;
    const query = {
        text: 'INSERT INTO users.users (user_name, email, password) VALUES ($1, $2, $3)',
        values: [userName, email, password]
    };
    const res = await connectToDB_1.client.query(query);
    connectToDB_1.client.end();
    return res.command;
}
exports.insertNewUser = insertNewUser;
