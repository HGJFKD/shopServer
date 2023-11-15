import { Types } from "mongoose"

type ResSignUp = {
    user_id: Types.ObjectId,
    user_name: string,
}

export default ResSignUp