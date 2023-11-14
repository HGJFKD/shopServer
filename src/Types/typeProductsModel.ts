import mongoose, { Schema, Model } from 'mongoose';
import { bottle } from './ProductsSchemos/typeBottles';
import { charger } from './ProductsSchemos/typeChargers';
import { earbud } from './ProductsSchemos/typeEarbuds';
import { laptop } from './ProductsSchemos/typeLaptops';
import { phone } from './ProductsSchemos/typePhones';
import { refrigerator } from './ProductsSchemos/typeRefrigerator';
import { shirt } from './ProductsSchemos/typeShirts';

const ProductsSchema: Schema<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt
> = new Schema({
    mixedObjects: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    }
},{
    strict: false
});

const ProductsModel: Model<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt
> = mongoose.model<
    bottle | charger | earbud | laptop | phone | refrigerator | shirt
> ('products', ProductsSchema);

export default ProductsModel