import { getProductById } from "../DL/getProductById"

export async function serverProductById(product_id: string) {

    const res = await getProductById(product_id)
    if (!res) {
        throw new Error('We did not find a product with such an id')
    }
    else {
        return res
    }
}
