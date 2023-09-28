import { Register } from "../interfaces/typeRegister";
import { client } from "./connectToDB";

export async function insertNewUser(user : Register) {
    const {userName, email, password} = user
    const query ={
        text: 'INSERT INTO users.users (user_name, email, password) VALUES ($1, $2, $3)',
        values: [userName, email, password]
    }
    const res = await client.query(query)
    client.end()
    
    return res.command
}