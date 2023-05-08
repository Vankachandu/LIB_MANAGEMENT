const jwt = require('jsonwebtoken');

require('dotenv').config();
const db = require('../model/users');
const { response } = require('express');

const authUser = (req, res, next) => {
    try {
        const token = req.headers['authorization'];

        jwt.verify(token, process.env.ACCESSTOKEN, async (err, user) => {
            if (err) {
                res.status(403).json(response(null,"token invalid",403))
            }
            else {
                try {
                    const jwt_role = await UserTable.findOne({email:user.email})
                   
                        if (jwt_role.role == "User" && result == true) {
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
module.exports={authUser};




