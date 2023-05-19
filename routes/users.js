const express = require('express');
const json = require('../authenetation/auth_token.js')

const routes = express.Router();
const User =require("../service/users")

routes.post("/",json.authUser, User.createUser);
routes.put('/update/:Id',User.updateUser);
routes.put('/profile/:id',User.profileupload);


module.exports={routes};