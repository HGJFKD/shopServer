import { getCartByUser } from "../DL/getCartByUser";
import { User } from "../Types/typeUserModel";

export async function serverCartByUser(_id: string) {
    const res = await getCartByUser(_id)
    if (!res) {
        throw new Error('We did not find such user')
    }
    else {
        return res
    }
}