import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids";
import { getCartByUser } from "./getCartByUser";

export default async function isProductAtCart(user_id: string): Promise<boolean> {

    let product

    const userCart = await getCartByUser(user_id)

    return product = userCart ? true : false
}
