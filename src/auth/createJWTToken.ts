import { JWTCode } from "../Types/typeJWTCode"
import { User } from "../Types/typeUserModel";
require("dotenv").config();

const jwt = require("jsonwebtoken");

export function createJWTToken(res: User): Record<string, JWTCode> {
    const _id = res._id
    const accessToken = jwt.sign(_id, process.env.ACCESS_TOKEN_SECRET)
    return { accessToken: accessToken }
};