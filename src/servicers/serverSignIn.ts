import { User } from "../Types/typeUserModel";
import isUser from "../DL/isUser";
import { JWTCode } from "../Types/typeJWTCode";
import { createJWTToken } from "../auth/createJWTToken";
import { getUserId } from "../DL/getUserId";

export async function serverSignIn(user: User): Promise<Record<string, JWTCode>> {

    const result = await isUser(user, 'email')
    const { isUserBollean, errorMessage } = result

    if (!isUserBollean) {
        throw new Error(errorMessage!)
    }
    else {
        const user_id = await getUserId(user)
        console.log(user_id);
        
        const token: Record<string, JWTCode> = createJWTToken(user_id);
        return token;
    }
}
