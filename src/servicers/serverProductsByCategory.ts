import { getProductsByCategory } from "../DL/getProductsByCategory"

export async function serverProductsByCategory (category_name : string) {  
      const res = await getProductsByCategory(category_name)
    if (!res){
        throw new Error ('We did not find such category')
    }
    else {
        return res
    }
}
