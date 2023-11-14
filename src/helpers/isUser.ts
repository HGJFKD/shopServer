import UserModel, { User } from "../Types/typeUserModel";

export default async function isUser(user: User): Promise<boolean> {
    const { name } = user;
    const res = await UserModel.find({ name: name });
    console.log(name);

    const isUser = res ? true : false
    return isUser
}