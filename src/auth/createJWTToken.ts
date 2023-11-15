import { JWTCode } from "../Types/typeJWTCode"
import { User } from "../Types/typeUserModel";
require("dotenv").config();

const jwt = require("jsonwebtoken");

export function createJWTToken(res: User): Record<string, JWTCode> {
    const { name, email } = res
    const accessToken = jwt.sign({name,email }, process.env.ACCESS_TOKEN_SECRET)
    return { accessToken: accessToken }
};