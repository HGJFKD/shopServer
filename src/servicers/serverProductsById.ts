import { getProductsById } from "../DL/getProductsById"

export async function serverProductsById(product_id: string) {

    const res = await getProductsById(product_id)
    if (!res) {
        throw new Error('We did not find such category')
    }
    else {
        return res
    }
}
