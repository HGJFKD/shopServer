import { Donates } from "../interfaces/typeDonates";
import { client } from "./connectToDB";

// Get all data func
export async function getDonatesByZeoutDL (zeout: string) : Promise<Donates[] | Donates | undefined> {
    const res = await client.query('SELECT * FROM revenues.revenues where zeout = $1',
    [zeout.toString()]);
    return res.rows ;
}