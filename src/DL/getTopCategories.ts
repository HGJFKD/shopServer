import { bottle } from "../Types/ProductsSchemos/typeBottles";
import { charger } from "../Types/ProductsSchemos/typeChargers";
import { earbud } from "../Types/ProductsSchemos/typeEarbuds";
import { laptop } from "../Types/ProductsSchemos/typeLaptops";
import { phone } from "../Types/ProductsSchemos/typePhones";
import { refrigerator } from "../Types/ProductsSchemos/typeRefrigerator";
import { shirt } from "../Types/ProductsSchemos/typeShirts";
import ProductsModel from "../Types/typeProductsModel";

// Get all data func
export default async function getTopCategories(): Promise<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt | undefined> {
    const res = await ProductsModel.find({ clicks: { $exists: true } })
        .sort({ clicks: -1 })
        .limit(5);
    return res;
}