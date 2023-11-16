import isProductAtCart from "../DL/isProductAtCart"
import removeFromCart from "../DL/removeFromCart"
import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids"

export async function serverRemoveFromCart(body: UserAndProduct_Ids) {

    const { user_id, product_id } = body
    const _ids: UserAndProduct_Ids = {
        user_id: user_id,
        product_id: product_id
    }
    let res;


    if (body.user_id === null || body.product_id === null) {
        throw new Error('A must to grieve user_id end product_id')
    }
    else {
        res = await isProductAtCart(user_id)
        if (res) {
            return res = await removeFromCart(_ids)
        } else {
            throw new Error(" We did not find a product with such an id in the cart ")
        }
    }
}

