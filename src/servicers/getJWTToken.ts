import { getUser } from "../DL/getUser";
import { createJWTToken } from "../auth/createJWTToken";
import { JWTCode } from "../Types/typeJWTCode";
import { User } from "../Types/typeUserModel";

export default async function getJWTToken(
  user: User
): Promise<Record<string, JWTCode> | Error> {
  const res = await getUser(user);
  if (res === 0) throw new Error("User is not in DB");

  const token: Record<string, JWTCode> = createJWTToken(user);
  return token;
}
