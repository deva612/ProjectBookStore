const Book  = require('../models/Book')
const Discount = require('../models/Discount')
async function getBooks(req,res) { 
    try {
        // select _id, bookTitle from Bokk=> in my sql
        let books = await Book.find({},{_id: 1, bookTitle: 1 }) //in mongodb
        console.log(books,'books');
        
        res.status(200).send({data: books})

    } catch (err) { 
        console.log(err)
        res.status(400).send({message : "something went wrong"})

    }

}
async function addDiscount(req,res){
    try {
        console.log(req.body);
        const discount = new Discount(req.body)
        await discount.save()
        res.status(200).send({message: 'Discount Added'})
        
    } catch (err) {
        console.log(err);
         res.status(400).send({message: 'Something went Wrong'})
    }
}
module.exports ={
    getBooks,
    addDiscount
}