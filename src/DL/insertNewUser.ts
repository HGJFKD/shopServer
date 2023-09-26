import { Register } from "../interfaces/typeRegister";
import { client } from "./connectToDB";

export async function insertNewUser(user : Register) {
    const query ={
        text: 'INSERT INTO users.users (user_name, password) VALUES ($1, $2)',
        values: [user.user, user.password]
    }
    const res = await client.query(query)
    client.end()
    
    return res.command
}