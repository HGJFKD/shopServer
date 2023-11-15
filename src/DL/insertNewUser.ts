import UserModel, { User } from "../Types/typeUserModel";

export async function insertNewUser(user: User) {

  const { name, email, password, cart } = user;

  const res = await UserModel.create({
    name: name,
    email: email,
    password: password,
    cart: cart
  });

  return res
}
