const express = require('express');


const routes = express.Router();
const User =require("../service/users")

routes.post("/", User.createUser);
routes.put('/update/:id',User.updateUser)

module.exports=routes;