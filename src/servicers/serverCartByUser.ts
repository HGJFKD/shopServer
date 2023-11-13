import { getCartByUser } from "../DL/getCartByUser";

export async function serverCartByUser(user_id: string) {
    const res = await getCartByUser(user_id)
    if (!res) {
        throw new Error('We did not find such user')
    }
    else {
        return res
    }
}