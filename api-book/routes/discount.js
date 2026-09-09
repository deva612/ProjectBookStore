const express = require('express')
const discountController = require('../controllers/discountController')
const router = express.Router()
router.get('/book/for/discount',(req,res) =>{
    discountController.getBooks(req,res)

}
)
router.post('/add/discount',(req,res)=>{
    discountController.addDiscount(req,res)
})
module.exports = router