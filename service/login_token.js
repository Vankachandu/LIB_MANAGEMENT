const joi = require('joi');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const db = require('../model/users');

function response(data, message, status) {
    return { status, message, data }
}

const TokenGenrate = (req, res) => {
    const reqinfo = {
        email: req.body.email,
        password: req.body.password
    }

    const JoiSchema = joi.object({

        email: joi.string().min(1).required(),
        password: joi.string().min(1).required(),
    })

    const validate_Res = JoiSchema.validate(reqinfo);
    if (validate_Res.error) {
        res.status(404).json(response(null, "Joi validation Error" + validate_Res.error, 404))
    }
    else {
        try {
            const accestoken = jwt.sign(reqinfo, process.env.ACCESSTOKEN)
            res.status(200).json(response(accestoken,"token",200))
        }
        catch(err){
            console.log(err)

        }
    }

}

module.exports = {TokenGenrate};