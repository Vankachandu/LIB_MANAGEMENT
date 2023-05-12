const express = require('express');
const json = require('../authenetation/auth_token.js')

const routes = express.Router();
const Bookrent =require("../service/bookrent.js");
const books = require('../model/books.js');


routes.post('/bookrent',json.authUser,Bookrent.bookrent);
routes.get('/getallbookrent',Bookrent.getallbookrent);
routes.post('/fine',Bookrent.fineamount);





module.exports={routes};