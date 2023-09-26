"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    host: 'localhost',
    port: 5432,
    database: 'peher_haneztach',
    user: 'postgres',
    password: '8114bar',
});
exports.client.connect();
