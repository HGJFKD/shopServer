import getTopCategories from "../DL/getTopCategories";

export async function serverTopCategories () {  
      const res = await getTopCategories()
    if (!res){
        throw new Error ('We did not find such category')
    }
    else {
        return res
    }
}