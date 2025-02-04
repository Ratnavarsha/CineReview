const express=require('express');
const userLogInController =require('../controllers/userLogInController')
const router=express.Router();

router.post('/login',userLogInController);

module.exports=router;