import { bottle } from "../Types/ProductsSchemos/typeBottles";
import { charger } from "../Types/ProductsSchemos/typeChargers";
import { earbud } from "../Types/ProductsSchemos/typeEarbuds";
import { laptop } from "../Types/ProductsSchemos/typeLaptops";
import { phone } from "../Types/ProductsSchemos/typePhones";
import { refrigerator } from "../Types/ProductsSchemos/typeRefrigerator";
import { shirt } from "../Types/ProductsSchemos/typeShirts";
import Changer from "../Types/enumChanger";
import ProductsModel from "../Types/typeProductsModel";
import UserAndProduct_Ids from "../Types/typeUserAndProduct_Ids";
import UserModel from "../Types/typeUserModel";
import addToCart from "./addToCart";
import { getCartByUser } from "./getCartByUser";
import { getProductById } from "./getProductById";
import inc from "./inc";
import removeFromCart from "./removeFromCart";


export async function changeQuantityOnCartByUser(_ids: UserAndProduct_Ids, changer: Changer): Promise<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt | null> {

    const { user_id, product_id } = _ids;

    let res;

    if (changer === 0) {

        const thisProductAtCart = await UserModel.findOne(
            {
                _id: user_id,
                cart: { $elemMatch: { 'product_id': product_id } },
            },
            { 'cart.$': 1 }
        )
        if (thisProductAtCart) {
            const thisProduct = await getProductById(product_id)
            if (Number(thisProduct!.products[0].quantity) >= 1) {

                return res = await inc(_ids)

            } else {
                throw new Error(`product: ${product_id} is Out of stock `)
            }
        } else {

            const thisProduct = await getProductById(product_id)
            if (Number(thisProduct!.products[0].quantity) >= 1) {
                res = await addToCart(_ids)
                return res = await inc(_ids)

            } else {
                throw new Error(`product: ${product_id} is Out of stock `)
            }
        }
    }


    if (changer === 1) {
        console.log(product_id);

        const thisProduct = await UserModel.findOne(
            {
                _id: user_id,
                cart: { $elemMatch: { 'product_id': product_id } }
            }
        )
        console.log(thisProduct);

        if (thisProduct) {
            if (thisProduct!.cart[0].quantity <= 1) {
                return res = await removeFromCart(_ids)
            }

            res = await UserModel.findOneAndUpdate(
                { _id: user_id, cart: { $elemMatch: { 'product_id': product_id } } },
                { $inc: { 'cart.$.quantity': -1 } },
                { new: true }
            ).exec()

            await ProductsModel.findOneAndUpdate(
                { 'products.product_id': product_id },
                { $inc: { 'products.$.quantity': 1 } },
                { new: true }
            ).exec()

        } else {
            throw new Error('There is no such product in the cart')
        }

    }

}