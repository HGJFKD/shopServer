"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
async function connectToDB() {
    const client = new pg_1.Client({
        host: 'localhost',
        port: 5432,
        database: 'northwind',
        user: 'postgres',
        password: '8114bar',
    });
    await client.connect();
    const res = await client.query('select * from products');
    console.log(res.rows);
    await client.end();
}
exports.default = connectToDB;
connectToDB();
