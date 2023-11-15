import { insertNewUser } from "../DL/insertNewUser";
import { User } from "../Types/typeUserModel";
import isUser from "../DL/isUser";
import ResSignUp from "../Types/typeResSignIn";


export async function addUserServer(user: User): Promise<ResSignUp> {

    const { name, _id } = user

    if (await isUser(user)) {
        throw new Error('User exist')
    }
    else {
        const res = await insertNewUser(user)
        const { name, _id } = res
        const resSignUp: ResSignUp = {
            user_name: name,
            user_id: _id
        }

        return resSignUp;
    }

}