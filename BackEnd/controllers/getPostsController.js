const Posts =require('../models/posts')

const getpostsController=async (req,res)=>{
    try {
        const reviews=await Posts.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({Message:`${error}`});
    }
}

module.exports=getpostsController;