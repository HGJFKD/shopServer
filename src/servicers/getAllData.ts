import {getDataDL} from '../DL/getAllData'
import { Donates } from '../interfaces/typeDonates'

// Chek data func
export async function chackData () : Promise<Donates[] | undefined> {
    const data = await getDataDL()
    if (!data) throw new Error ('Error!, no data')
    return data
}