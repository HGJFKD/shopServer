import { Types } from "mongoose";
import { JWTCode } from "../Types/typeJWTCode"
import { User } from "../Types/typeUserModel";
require("dotenv").config();

const jwt = require("jsonwebtoken");

export function createJWTToken(user_id: Types.ObjectId): Record<string, JWTCode> {

    const accessToken = jwt.sign(user_id.toJSON() , process.env.ACCESS_TOKEN_SECRET)
    return { accessToken: accessToken }
};