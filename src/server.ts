import registerRouter from "./routes/registerRouter";
import donorsRouter from "./routes/donorsRouter";
import {authenticateToken} from './auth/authenticateToken'
import unless from './helpers/unless'
import { resPageNotFound } from "./controller/resPageNotFound";

const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk') 
const app = express();


app.use(morgan("dev"))
app.use(cors());
app.use(express.json())
// app.use(authenticateToken)
// app.use(unless('/register/new', authenticateToken))


app.use('/register', registerRouter);
app.use('/donors', donorsRouter);

app.use("*",resPageNotFound);


app.listen(3000, () => {
    // readCSVFile(filePath).then(data => data.forEach(person => insertPersonToDB(person)))
    console.log('\n', chalk.blueBright(`Server is running !!`));  
});
