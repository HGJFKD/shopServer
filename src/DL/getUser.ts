import { Register } from "../interfaces/typeRegister";
import { client } from "./connectToDB";

export async function getUser(userRegister : Register) {
    const {userName, email, password} = userRegister

    const res = await client.query('select * from users.users where user_name = $1, or email = $2, or password = $3',
    [userName, email, password])
    client.end()
    
    return res.rowCount
}