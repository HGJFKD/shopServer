import { Donates } from "../interfaces/typeDonates";
import { client } from "./connectToDB";

// Get all data func
export async function getDataDL () : Promise<Donates[] | undefined> {
    const res =  await client.query('SELECT * FROM revenues.revenues')
    return res.rows  
}