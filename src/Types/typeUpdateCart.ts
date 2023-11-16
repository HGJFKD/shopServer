
type UpdateCart = {
    user_id: string,
    cart: [
        {
            product_id: string,
            quantity: number
        }
    ]
}

export default UpdateCart