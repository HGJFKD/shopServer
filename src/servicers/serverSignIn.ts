import { User } from "../Types/typeUserModel";
import isUser from "../DL/isUser";
import { JWTCode } from "../Types/typeJWTCode";
import { createJWTToken } from "../auth/createJWTToken";

export async function serverSignIn(user: User): Promise<Record<string, JWTCode>> {


    if (!await isUser(user)) {
        throw new Error('User is not registered')
    }
    else {

        const token: Record<string, JWTCode> = createJWTToken(user);
        return token;
    }
}
