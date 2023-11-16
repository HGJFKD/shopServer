import { Types } from "mongoose";
import UserModel, { User } from "../Types/typeUserModel";


export async function getUserId(user: User): Promise<Types.ObjectId | null> {
    const { email } = user
    const res = await UserModel.findOne({ email: email }).exec()
    if (res) {
        return res._id;
    } else {
        return null;
    }
}
