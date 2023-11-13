import { User } from "../Types/typeUserModel";
import { client } from "./connectToMongoDB";

export async function getUser(userRegister : User) {
    const {name, email, password} = userRegister

    const res = await client.query('select * from users.users where user_name = $1, or email = $2, or password = $3',
    [name, email, password])
    client.end()
    
    return res.rowCount
}