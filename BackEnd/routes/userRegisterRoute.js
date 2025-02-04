const express=require('express');
const registerUser=require('../controllers/userRegisterController')
const router=express.Router();

router.post('/register',registerUser);

module.exports=router;