const Review=require('../models/posts')

const submitReviewController = async (req,res)=>{
    try {
        const {
            movieName,
            movieCast,
            movieCrew,
            movieRating,
            movieDescription,
            movieVerdict,
            reviewer
    } = req.body;

    const review=new Review({
        movieName:movieName,
        castDetails:movieCast,
        crewDetails:movieCrew,
        rating: movieRating,
        reviewDescription : movieDescription,
        verdict: movieVerdict,
        createdBy:reviewer
    })
    await review.save();
    res.status(200).json({message:"Succes"});

    } catch (error) {
        console.log(error)
    }
}
module.exports=submitReviewController;