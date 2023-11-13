import mongoose, { Schema, InferSchemaType, Model } from 'mongoose';


const UserSchema: Schema<User> = new Schema<User>({

    _id: mongoose.Schema.Types.ObjectId,

    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cart: {
        type: {
            products: [{
                product_id: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }

            }]
        },

        default: []
    },

}, { timestamps: true });

export type User = InferSchemaType<typeof Schema>;

const UserModel: Model<User> = mongoose.model<User>('users', UserSchema);

export default UserModel