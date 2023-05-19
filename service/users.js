
const User = require("../model/users");
const { param } = require("../routes/users");
const nodemailer = require('nodemailer');
const otp = require('generate-password');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

function response(data,status=200,message="ok"){
    return {status , message ,data}
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:"chandu@xponential.digital",
        pass:"mgllagoipjegyuqo"
    }
})
function sendmail(toMail,otp){
    
    const mailOptions = {
        from :"chandu@xponential.digital",
        to: toMail,
        subject:" Successfully Account created",
        text:`here your otp: ${otp}`
    };
    transporter.sendMail(mailOptions,function(error,info){
        if (error){
            console.log(error);

        }else{
            console.log('email sent:'+ info.response);
        }
    });
}

const createUser = async(req,res)=>{
    const password = await bcrypt.hash(req.body.password,10)
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
            let paramsId = req.params.Id
            const updateDetails = await User.query().findById(paramsId).patch(req.body)
            res.status(200).json(response(req.body,"profile Upadte",200))
        }
        catch(err){
            res.status(400).json(response(""+err,"error",400))
        }
    }
    let profileext
    let profilename

    const filestorageEngine=multer.diskStorage({
       
        destination:"profile",
        
        filename: (req, file, cb)=>{
            cb(null,"chandu"+ Date.now()+"--"+path.extname(file.originalname));
            profileext = path.extname(file.originalname)
        },
    
    });
    
    const upload=multer({storage:filestorageEngine}).single("image2")
    
      
    const profileupload = async (req,res)=>{
        try{
            const pro = await User.query().findOne({id:req.params.id})
            console.log(pro)
            profilename=pro.Name
            
            // name = 
            upload(req, res, function (err) {
                if (err) {
                    res.send(err);
                }})
           
            let basic = {
                
                profile: profilename,
             }
             console.log(filestorageEngine.getFilename)
             
          
         
            const updateDetails = await User.query().findOne({id:req.params.id}).update(basic)
            res.status(200).json(response(basic,"profile Upadte",200))
        }
        catch(err){
            res.status(400).json(response(""+err,"error",400))
        }
    }
    

module.exports={createUser,updateUser,profileupload}