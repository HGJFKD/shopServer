import { Client } from 'pg';

export const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'peher_haneztach',
        user: 'postgres',
        password: '8114bar',
    })
    client.connect();

