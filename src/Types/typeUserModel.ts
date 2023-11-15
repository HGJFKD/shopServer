import mongoose, { Schema, InferSchemaType, Model } from 'mongoose';
import Cart from './typeCart';


const UserSchema: Schema<User> = new Schema<User>({


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
    cart: [
        {
            product_id: String,
            quantity: Number
        }
    ]
}

    , {
        strict: false
    }
);

export type User = InferSchemaType<typeof Schema>;

const UserModel: Model<User> = mongoose.model<User>('users', UserSchema);

export default UserModel