// require('dotenv').config()
// const jwt = require("jsonwebtoken");

import express from 'express'
import { resTokenToCleint } from '../controller/resTokenToCleint';
import { addUser } from '../controller/addUser';
import isUser from '../controller/resIsUser';

const router = express.Router();

router.post('/', resTokenToCleint);

router.post('/new', addUser)

router.post("/isUser", )

export default  router;

