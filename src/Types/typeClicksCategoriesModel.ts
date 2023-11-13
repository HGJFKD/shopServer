import mongoose, { Schema, InferSchemaType, Model } from 'mongoose';


const CategoriesSchema: Schema<category> = new Schema<category>({

    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        required: true
    }
}
)

export type category = InferSchemaType<typeof Schema>;

const ClicksCategoriesModel: Model<category> = mongoose.model<category>('Catogories', CategoriesSchema);

export default ClicksCategoriesModel