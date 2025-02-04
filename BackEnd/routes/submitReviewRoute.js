const express=require('express');
const router = express.Router();
const submitReviewController=require('../controllers/submitReviewController');

router.post('/post',submitReviewController);

module.exports=router;