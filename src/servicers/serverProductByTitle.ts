import { getProductByTitle } from "../DL/getProductByTitle"

export async function serverProductByTitle(product_title: string) {

    const res = await getProductByTitle(product_title)
    if (!res) {
        throw new Error('We did not find a product with such an id')
    }
    else {
        return res
    }
}
