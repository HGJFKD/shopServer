"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertNewUser = void 0;
const pg_1 = require("pg");
async function insertNewUser(user) {
    const client = new pg_1.Client({
        host: "localhost",
        port: 5432,
        database: "peher_haneztach",
        user: "postgres",
        password: "8114bar",
    });
    client.connect();
    const { userName, email, password } = user;
    const query = {
        text: "INSERT INTO users.users (user_name, email, password) VALUES ($1, $2, $3)",
        values: [userName, email, password],
    };
    const res = await client.query(query);
    client.end();
    return res.rows[0];
}
exports.insertNewUser = insertNewUser;
