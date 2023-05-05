const express= require ("express");

const app = express();
const service = require("./service/login_token")
const user = require('./routes/users');
const Users = require("./model/users");
app.use(express.json());

app.post("/login",service.TokenGenrate)
app.use("/users",user);

app.listen(1234,()=>{
    console.log("server Running on 1234")
})