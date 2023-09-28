import { insertNewUser } from "../DL/insertNewUser";
import { Register } from "../interfaces/typeRegister";

export async function addUserServer (user : Register) : Promise<boolean>{
    const res = await insertNewUser(user)
    if (res !== "INSERT"){
        throw new Error ('Error!')
    }
    return true
}