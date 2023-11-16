import UserModel, { User } from "../Types/typeUserModel";

export default async function isUser(user: User , filter: string): Promise<{
    isUserBollean: boolean,
    errorMessage: string
}> {

    const { _id, email, password } = user;
    let errorMessage: string
    let isUserBollean: boolean
    let res;

    if (filter === '_id') {
        res = await UserModel.find({ _id: _id });
        if (!res) {
            errorMessage = 'We did not find such a user'
            isUserBollean = false
        } else {
            errorMessage = 'successful'
            isUserBollean = true
        }
        return { isUserBollean: isUserBollean, errorMessage: errorMessage }
    } else {
        res = await UserModel.find({ email: email });

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
        return { isUserBollean: isUserBollean, errorMessage: errorMessage }
    }


}