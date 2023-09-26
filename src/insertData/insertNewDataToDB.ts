import { client } from "../DL/connectToDB";
import { Donates } from "../interfaces/typeDonates";
import strToDate from "./convertStrToDate";

export default async function insertPersonToDB(person: Donates) {
    const {Zeout,
        ClientName,
        Adresse,
        Phone,
        Mail,
        Amount,
        TransactionTime,
        makor,
        Category,
        Notes} = person

    // connect
    const query = {
        text: 'INSERT INTO revenues.revenues (zeout, client_name, adresse, phone, email, amount, transaction_time, makor, category, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        values: [+Zeout, ClientName, Adresse, Phone, Mail, +Amount, strToDate(TransactionTime), makor, Category, Notes],
      }

    const res = await client.query(query);
    return res.command
}

