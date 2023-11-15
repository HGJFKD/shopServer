import ResSignUp from "../Types/typeResSignIn";
import UserModel, { User } from "../Types/typeUserModel";

export default async function isUser(user: User): Promise<{
    isUserBollean: boolean,
    errorMessage: string
}> {

    const { email, password } = user;
    let errorMessage: string
    let isUserBollean: boolean

    const res = await UserModel.find({ email: email });


    if (Object.keys(res).length <= 0) {
        errorMessage = "User not found";
        isUserBollean = false
    }
    else {
        const user_password = res[0].password

        if (user_password !== password) {
            errorMessage = "Incorrect password";
            isUserBollean = false
        }
        else {
            errorMessage = "Login successful"
            isUserBollean = true
        }
    }
    // isUserBollean = (Object.keys(res).length > 0) ? true : false
    return { isUserBollean: isUserBollean, errorMessage: errorMessage }
}