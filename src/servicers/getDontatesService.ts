import { getDonatesByNameDL } from "../DL/getDonatesByNameDL";
import { getDonatesByZeoutDL } from "../DL/getDonatesByZeout";
import { Donates } from "../interfaces/typeDonates";

export async function getDontatesService (user : string) {
    let res : Donates[] | Donates | undefined
    
    if (isNaN(+user) || user === '0') {  
        res = await getDonatesByNameDL(user)
    } else {
        res = await getDonatesByZeoutDL(user)
    }

    if (!res){
        throw new Error ('We did not find such a donor')
    }
    else {
        return res
    }
}
