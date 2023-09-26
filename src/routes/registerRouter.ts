require('dotenv').config()
const jwt = require("jsonwebtoken");


import express from 'express'
import { setUserController } from '../controller/setUserController';

const router = express.Router();

router.post("/new", setUserController);

export default  router;

