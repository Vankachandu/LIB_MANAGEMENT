const Users = require("../model/users");
const User = require("../model/users");
const { param } = require("../routes/users");
const nodemailer = require('nodemailer');
const otp = require('generate-password');
const bcrypt = require('bcrypt');


function response(data,status=200,message="ok"){
    return {status , message ,data}
}

const transporter = nodemailer.createTransport({
    service: 'gamail',
    auth:{
        user:"vanka@xponential.digital",
        password:"Chetan"
    }
})
function sendmail(toMail,otp){
    const mailOptions = {
        from :"chandu@xponential.digital",
        to: toMail,
        subject:"Account created",
        text:`otp is here: ${otp}`
    };
    transporter.sendmail(mailOptions,function(error,info){
        if (error){
            console.log(error);

        }else{
            console.log('email sent:'+ info.response);
        }
    });
}

const createUser = async(req,res)=>{
    const password = await bcrypt.hash(req.res.password,10)
    try{
        const otp1=otp.generate({length:10})
        const user = await User.query().insert(req.body);
        sendmail(req.body.email,otp1)
        res.send(user)

    }
    catch(err){
        res.json(response(null,500,err))

    }
}

    const updateUser = async (req,res)=>{
        try{
            let paramsId = req.paramsId
            const updateDetails = (await Users.query()).findById(paramsId).patch(re)
            res.status(200).json(response(req.body,"profile Upadte",200))
        }
        catch(err){
            res.status(400).json(response(""+err,"error",400))
        }
    }

module.exports={createUser,updateUser}