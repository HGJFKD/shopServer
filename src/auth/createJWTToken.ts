import { JWTCode } from "../Types/typeJWTCode"
import { User } from "../Types/typeUserModel";
require("dotenv").config();

const jwt = require("jsonwebtoken");

export function createJWTToken (res : User ): Record<string,JWTCode>{
    const name = res.name as string
    const accessToken = jwt.sign(name, process.env.ACCESS_TOKEN_SECRET)
    return {accessToken:accessToken}
};