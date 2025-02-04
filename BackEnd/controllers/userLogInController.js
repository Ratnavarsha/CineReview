const mongoose=require('mongoose');
const User=require('../models/user');

const userLogInController= async (req,res)=>{
    console.log(req.body);
    const {mail,password}=req.body;
    const details= await User.findOne({email:mail});
    if(!details)
    {
        return res.status(400).json({message:'User not found'})
    }
    if(details.password!==password)
    {
        return res.status(401).json({message:'Password incorrect'});
    }
    return res.status(200).json({message:'LogIn successfull',currentUser:details.name,reviewsCount:details.reviewsPosted,profilePic:details.profilePic});
}
module.exports=userLogInController