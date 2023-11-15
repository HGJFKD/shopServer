import ResSignUp from "../Types/typeResSignIn";
import UserModel, { User } from "../Types/typeUserModel";

export default async function isUser(user: User): Promise<{
    isUserBollean: boolean,
    errorMessage: string
}> {

    const { email, password } = user;
    let errorMessage: string

    const res = await UserModel.find({ email: email });

    const user_password = res[0].password as 

    if (Object.keys(res).length <= 0) {
        errorMessage = "User not found";
    }

    if (user_password !== password) {
        errorMessage = "Incorrect password";
    }

    else {
        errorMessage = "Login successful"
    }

    const isUserBollean = (errorMessage === "Login successful") ? true : false

    return { isUserBollean: isUserBollean, errorMessage: errorMessage }
}