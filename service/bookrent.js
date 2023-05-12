
const Bookrent = require('../model/bookrent');
const books = require('../model/books');
const timediff = require('timediff');
const Finetable = require("../model/finerent")


function response(data,status=200,message="ok"){
    return {status , message ,data}
}

const bookrent = async(req,res)=>{
    
    try{
        req.body.issuedate= new Date();
        const book= await books.query().findById(req.body.bookid);
        if(book.totalBooks==0)return res.send(" Currently Book not avaliable ! out of stock")
        book.totalBooks = book.totalBooks -1
        book.booktaken +=1 
        const book1= await books.query().findById(req.body.bookid).update(book);
        req.body.returndate = new Date(new Date().getTime()+(5*24*60*60*1000));
        const books1 = await Bookrent.query().insert(req.body);
       
        res.send(books1)

    }
    catch(err){
        res.json(response(null,500,"err"+err))

    }
}

const getallbookrent = async (req , res)=>{
    try{
        const allbookrent = await Bookrent.query()
        res.send(allbookrent)
    }
    catch(err){
        res.send(err)

    }
 }

 const fineamount = async(req,res)=>{
    
    try{
        const date_diff = await Bookrent.query().findOne({bookid:req.body.bookid})
        const time1 = timediff(date_diff.returndate, new Date(), 'D')
        if(time1.days >= 0){

            const fine = time1.days*10
             req.body.fineamount = fine
            let info = {bookid:req.body.bookid,userid:req.body.userid,fineamount:fine}
            const create = await Finetable.query().insert(info)
            res.send("fine amount added")
        }
        else{
              res.send("No fine will be added")
        }
        
    }
    catch(err){
        res.json(response(null,500,"err"+err))

    }
}
 


module.exports={bookrent,getallbookrent,fineamount}