const jwt = require('jsonwebtoken');

require('dotenv').config();
const db = require('../model/users');
const Users = require('../model/users');


function response(data,status=200,message="ok"){
    return {status , message ,data}
}

const authUser = (req, res, next) => {
    try {
        const token = req.headers['authorization'];

        jwt.verify(token, process.env.ACCESSTOKEN, async (err, user) => {
            if (err) {
                res.status(403).json(response(null,"token invalid",403))
            }
            else {
                try {
                    const jwt_role = await Users.query().findOne({email:user.email})
                  
                   
                        if (jwt_role.role == "Admin" ) 
                        
                         return  next();
                        res.send("Your are an admin")
                    
                }
                catch (err) {
                    res.status(403).json(response(null,"Password Incorrect",404))
                }
                }
            })
    
    }
    catch (err) {
        res.status(400).json(response(null,"error"+err,400))
    }

};
const authAdmin = (req, res, next) => {
    try {
        const token = req.headers['authorization'];

        jwt.verify(token, process.env.ACCESSTOKEN, async (err, user) => {
            if (err) {
                res.status(403).json(response(null,"token invalid",403))
            }
            else {
                try {
                    const jwt_role = await Users.query().findOne({email:user.email})

                  
                   
                        if (jwt_role.role == "Admin" ) {
                            next();
                        }
                    
                }
                catch (err) {
                    res.status(403).json(response(null,"Password Incorrect",404))
                }
                }
            })
    
    }
    catch (err) {
        res.status(400).json(response(null,"error"+err,400))
    }

}
module.exports={authUser,authAdmin};




