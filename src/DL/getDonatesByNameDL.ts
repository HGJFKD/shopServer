import { Donates } from "../interfaces/typeDonates";
import { client } from "./connectToDB";

// Get all data func
export async function getDonatesByNameDL (cleint_name: string) : Promise<Donates[] | Donates | undefined> {
    const res = await client.query('SELECT * FROM revenues.revenues where client_name = $1',
    [cleint_name]);
    return res.rows;
}