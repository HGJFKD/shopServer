import { insertNewUser } from "../DL/insertNewUser";
import { createJWTToken } from "../auth/createJWTToken";
import { JWTCode } from "../interfaces/typeJWTCode";
import { Register } from "../interfaces/typeRegister";

export async function addUserServer (user : Register) : Promise<Record<string, JWTCode>>{
    const res = await insertNewUser(user)
    if (res >= 0){
        throw new Error ('Error iserting!')
    }
    const token: Record<string, JWTCode> = createJWTToken(user);
    return token;
}