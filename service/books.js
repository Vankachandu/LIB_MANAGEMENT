const Books = require("../model/users");

const createbooks = async(req,res)=>{
    
    try{
        
        const books = await Books.query().insert(req.body);
       

        res.send(books)

    }
    catch(err){
        res.json(response(null,500,err))

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

 module.exports={createbooks,updatebooks};
    