import { insertNewUser } from "../DL/insertNewUser";
import { createJWTToken } from "../auth/createJWTToken";
import { JWTCode } from "../Types/typeJWTCode";
import { User } from "../Types/typeUserModel";


export async function addUserServer (user : User) : Promise<Record<string, JWTCode>>{
    const res = await insertNewUser(user)
    if (!res){
        throw new Error ('Error iserting!')
    }
    const token: Record<string, JWTCode> = createJWTToken(user);
    return token;
}