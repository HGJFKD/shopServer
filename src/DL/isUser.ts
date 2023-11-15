import ResSignUp from "../Types/typeResSignIn";
import UserModel, { User } from "../Types/typeUserModel";

export default async function isUser(user: User): Promise<boolean> {

    const { email } = user;

    const res = await UserModel.find({ email: email });
    const { name, _id } = res

    const isUserBollean = Object.keys(res).length > 0 ? true : false

    return isUserBollean
}