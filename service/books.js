
const Books = require('../model/books');




function response(data,status=200,message="ok"){
    return {status , message ,data}
}

const createbooks = async(req,res)=>{
    
    try{
        
        const books1 = await Books.query().insert(req.body);
       

        res.send(books1)

    }
    catch(err){
        res.json(response(null,500,"err"+err))

    }
}
    
    const updatebooks = async (req,res)=>{
        try{
            let paramsId = req.params.Id
            const updateDetails = await Books.query().findById(paramsId).patch(req.body)
            res.status(200).json(response(req.body,"Books Upadted",200))
        }
        catch(err){
            res.status(400).json(response(""+err,"error",400))
        }
}

 const getallbooks = async (req , res)=>{
    try{
        const getbooks = await Books.query()
        res.send(getbooks)
    }
    catch(err){
        res.send(err)

    }
 }

 const getonebooks = async (req , res)=>{
    try{
        const getbooks = await Books.query().where("Name",req.body.Name)
        
        if(getbooks.length>=1){
            return  res.send(getbooks) 

        }
        res.send("Curently The Book Is Not Avaliable")

    }
    catch(err){
        res.send(err)

    }
 }

 


 module.exports={createbooks,updatebooks,getallbooks,getonebooks};
    