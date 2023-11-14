import { bottle } from "../Types/ProductsSchemos/typeBottles";
import { charger } from "../Types/ProductsSchemos/typeChargers";
import { earbud } from "../Types/ProductsSchemos/typeEarbuds";
import { laptop } from "../Types/ProductsSchemos/typeLaptops";
import { phone } from "../Types/ProductsSchemos/typePhones";
import { refrigerator } from "../Types/ProductsSchemos/typeRefrigerator";
import { shirt } from "../Types/ProductsSchemos/typeShirts";
import ProductsModel from "../Types/typeProductsModel";

// Get all data func
export async function getProductByTitle(product_title: string): Promise<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt | undefined> {
    const res = await ProductsModel.findOne(
        { 'products.title': product_title },
        { 'products.$': 1 }
    ).exec()
    return res.products;
}