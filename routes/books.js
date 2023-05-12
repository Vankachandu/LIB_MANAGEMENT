const express = require('express');
const json = require('../authenetation/auth_token.js')

const routes = express.Router();
const Books =require("../service/books");


routes.post("/book",json.authUser, Books.createbooks);
routes.put('/book/update/:Id',Books.updatebooks)
routes.get('/getbooks',Books.getallbooks)
routes.get('/getone',Books.getonebooks)


module.exports={routes};