const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router();

router.post('/admin/login',(req,res)=>{
    userController.doAdminLogin(req,res)
})
module.exports = router