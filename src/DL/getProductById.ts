import { bottle } from "../Types/ProductsSchemos/typeBottles";
import { charger } from "../Types/ProductsSchemos/typeChargers";
import { earbud } from "../Types/ProductsSchemos/typeEarbuds";
import { laptop } from "../Types/ProductsSchemos/typeLaptops";
import { phone } from "../Types/ProductsSchemos/typePhones";
import { refrigerator } from "../Types/ProductsSchemos/typeRefrigerator";
import { shirt } from "../Types/ProductsSchemos/typeShirts";
import ProductsModel from "../Types/typeProductsModel";


export async function getProductById(product_id: string): Promise<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt | null> {

    const res = await ProductsModel.findOneAndUpdate(
        { 'products.product_id': product_id },
        { $inc: { 'products.$.clicks': 1 } },
        { new: true }
    ).exec()

    const product = await ProductsModel.findOne(
        { 'products.product_id': product_id },
        { 'products.$': 1 },
        { new: true }
    ).exec()
    return product
}