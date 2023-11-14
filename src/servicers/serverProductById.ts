import { getProductById } from "../DL/getProductById"

export async function serverProductById(product_title: string) {

    const res = await getProductById(product_title)
    if (!res) {
        throw new Error('We did not find a product with such an title')
    }
    else {
        return res
    }
}
