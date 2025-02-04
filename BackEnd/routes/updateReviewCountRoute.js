const express=require('express');
const updateReviewCountController=require('../controllers/updateReviewCountController');
const router=express.Router();

router.put('/post/:name',updateReviewCountController);

module.exports=router;