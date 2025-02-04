const express=require('express');
const router=express.Router();
const getpostsController=require('../controllers/getPostsController');

router.get('/posts',getpostsController);
module.exports=router;