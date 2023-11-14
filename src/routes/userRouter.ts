// require('dotenv').config()
// const jwt = require("jsonwebtoken");

import express from 'express'
import { resTokenToCleint } from '../controller/resTokenToCleint';
import { addUser } from '../controller/addUser';
import signin from '../controller/resSignIn';

const router = express.Router();

router.post('/signup', addUser)

router.post("/signin", signin)

export default  router;

