const mongoose=require('mongoose');

const reviewSchema=mongoose.Schema({
    movieName:{type:String , required:true},
    castDetails:{type:String , required:true},
    crewDetails:{type:String , required:true},
    rating: {type:Number , required:true},
    reviewDescription : {type:String , required:true},
    verdict: {type:String, required:true},
    createdBy: {type: String ,required:true}
})

module.exports=mongoose.model('Post',reviewSchema);