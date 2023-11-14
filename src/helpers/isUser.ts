import UserModel, { User } from "../Types/typeUserModel";

export default async function isUser(user: User): Promise<boolean> {
    const { name } = user;
    const res = await UserModel.find({ name: name });

    if (Object.keys(res).length > 0) return true
    else { return false }
}