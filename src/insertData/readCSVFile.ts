import fs from 'fs';
import csvParserMaker from 'csv-parser';
import path from 'path';
import { Donates } from '../interfaces/typeDonates';
const csvParser = csvParserMaker();

export const filePath: string = path.win32.normalize("C:/Users/bar lev/Downloads/database.csv")
export default async function readCSVFile(filePath: string): Promise<Donates[]> {
    const results: Donates[] = [];
  
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser)
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
  }

