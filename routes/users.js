const express = require('express');


const routes = express.Router();
const User =require("../service/users")

routes.post("/", User.createUser);
routes.put('/update/:Id',User.updateUser)

module.exports=routes;