import { getProductsByCategory } from "../DL/getProductsByCategory"

export async function serverProductsByCategory (category_id : string) {  
      const res = await getProductsByCategory(category_id)
    if (!res){
        throw new Error ('We did not find such category')
    }
    else {
        return res
    }
}
