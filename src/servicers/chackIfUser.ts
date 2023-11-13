import { getUser } from "../DL/getUser";
import { Register } from "../Types/typeRegister";

export async function chackIfUser (user : Register) : Promise<boolean>{
    const res = await getUser(user)
    if (res === 0){
        return false
    }
    return true
}