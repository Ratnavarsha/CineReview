const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
    email:{type:String , required:true , unique:true},
    name:{type:String , required:true},
    reviewsPosted: {type:Number , required:true},
    password:{type:String , required:true}
},{timestamps:true});

module.exports=mongoose.model('User',userSchema);