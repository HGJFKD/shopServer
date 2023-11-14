import { insertNewUser } from "../DL/insertNewUser";
import { createJWTToken } from "../auth/createJWTToken";
import { JWTCode } from "../Types/typeJWTCode";
import { User } from "../Types/typeUserModel";
import isUser from "../helpers/isUser";


export async function addUserServer(user: User): Promise<Record<string, JWTCode>> {
    console.log("user", user);


    if (await isUser(user)) {
        throw new Error('User exist')
    }
    else {
        const res = await insertNewUser(user)

        // const token: Record<string, JWTCode> = createJWTToken(user);

        return res;
    }

}