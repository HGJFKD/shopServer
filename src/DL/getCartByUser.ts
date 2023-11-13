import UserModel, { User } from "../Types/typeUserModel";

// Get all data func
export async function getCartByUser(User_id: string): Promise<User[] | User | undefined> {
    const res = await UserModel.find({ User_id }).exec()
    return res;
}