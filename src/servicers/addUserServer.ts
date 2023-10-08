import { insertNewUser } from "../DL/insertNewUser";
import { Register } from "../interfaces/typeRegister";

export async function addUserServer (user : Register) : Promise<boolean>{
    const res = await insertNewUser(user)
    if (res >= 0){
        throw new Error ('Error iserting!')
    }
    return true
}