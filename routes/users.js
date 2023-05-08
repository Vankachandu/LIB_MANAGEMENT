const express = require('express');
const json = require('../authenetation/auth_token.js')

const routes = express.Router();
const User =require("../service/users")

routes.post("/",json.verifyToken, User.createUser);
routes.put('/update/:Id',User.updateUser)



module.exports=routes;