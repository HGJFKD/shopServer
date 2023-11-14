import { User } from "../Types/typeUserModel";
import isUser from "../helpers/isUser";

export async function serverSignIn(user: User): Promise<Error | string> {

    if (!await isUser(user)) {
        throw new Error('User is not registered')
    }
    else {


        // const token: Record<string, JWTCode> = createJWTToken(user);

        // return token;
        return ''
    }
}
