import { getCartByUser } from "../DL/getCartByUser";
import { User } from "../Types/typeUserModel";

export async function serverCartByUser(user_id: string): Promise<User | null> {
    const res = await getCartByUser(user_id)

    if (!res) {
        throw new Error('We did not find such user')
    }
    else {
        return res
    }
}