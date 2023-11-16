import isProductAtCart from "../DL/isProductAtCart"
import clearCart from "../DL/clearCart"
import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids"

export async function serverClearCart(body: UserAndProduct_Ids) {

    const { user_id } = body

    let res;


    if (body.user_id === null || body.product_id === null) {
        throw new Error('A must to grieve user_id end product_id')
    }
    else {
        res = await isProductAtCart(user_id)
        if (res) {
            return res = await clearCart(user_id)
        } else {
            throw new Error(" We did not find a product with such an id in the cart ")
        }
    }
}
