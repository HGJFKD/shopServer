import Changer from "../Types/enumChanger";
import UpdateCart from "../Types/typeUpdateCart";
import { changeQuantityOnCartByUser } from "./changeQuantityOnCartByUser";
import clearCart from "./clearCart";
import { getCartByUser } from "./getCartByUser";

export async function updateCartByUser(body: UpdateCart) {
    const { user_id, cart } = body
    const changer: Changer = 0

    cart.map(async ({ quantity, product_id }) => {
        for (let index = 0; index < quantity; index++) {
            try {
                const added = await changeQuantityOnCartByUser({ user_id, product_id }, changer)
                console.log(added);
                
            }  catch (error) {
                continue
            }
        }   
    })
    const newCatt = await getCartByUser(user_id) 
    return newCatt
}