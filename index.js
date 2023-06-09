const express= require ("express");

const app = express();
const service = require("./service/login_token")
const user = require('./routes/users');
const Books = require('./routes/books') 
const Bookrent = require('./routes/bookrent');
const { bookrent } = require("./service/bookrent");
// const Users = require("./model/users");
app.use(express.json());

app.post("/login",service.TokenGenrate)
app.use ("/", Books.routes)
app.use("/users",user.routes);
app.use("/",Bookrent.routes);

app.listen(1234,()=>{
    console.log("server Running on 1234")
})