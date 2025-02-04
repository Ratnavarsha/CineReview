const User=require('../models/user');

const updateReviewCountController =async (req,res)=>{
    try {
        const userName=req.params.name;
        const details=await User.findOneAndUpdate({name:userName},{$inc :{reviewsPosted:1}},{new:true});

    if(!details)
    {
        return res.status(404).json({message:'User not found'})
    }
    return res.status(200).json({message:'Count incrementd',data:details.reviewsPosted});

    } catch (error) {
        return res.status(400).json({message:"Server error"});
    }
}

module.exports=updateReviewCountController;