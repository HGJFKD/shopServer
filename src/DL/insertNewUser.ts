import { Register } from "../interfaces/typeRegister";
import { Client } from "pg";

export async function insertNewUser(user: Register) {
  const client = new Client({
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
