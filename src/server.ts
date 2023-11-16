import userRouter from "./routes/userRouter";
import shopRouter from "./routes/shopRouter";
import { authenticateToken } from './auth/authenticateToken'
import unless from './middleware/unless'
import { resPageNotFound } from "./controller/resPageNotFound";
import connectToDatabase from "./DL/connectToMongoDB";
import cartRouter from "./routes/cartRouter";

const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk')
const app = express();

app.use(morgan("dev"))
app.use(cors());
app.use(express.json())

app.use('/user', userRouter);
app.use('/shop', shopRouter);
app.use('/cart', authenticateToken, cartRouter);

app.use("*", resPageNotFound);


app.listen(3000, () => {
    connectToDatabase();
    console.log('\n', chalk.blueBright(`Server is running !!`));
});
