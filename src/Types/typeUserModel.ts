import mongoose, { Schema, InferSchemaType, Model } from 'mongoose';
import Cart, { typyCart } from './typeCart';


const UserSchema: Schema<User> = new Schema<User>({

    // _id: mongoose.Types.ObjectId,

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
    cart: [Cart]
}

    , {
        strict: false
    }
);

export type User = {
    // _id: mongoose.Types.ObjectId;
    password: string,
    email:string,
    name: string,
    cart: [typyCart]

}

const UserModel: Model<User> = mongoose.model<User>('users', UserSchema);

export default UserModel