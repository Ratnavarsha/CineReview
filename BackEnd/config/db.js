const mongoose=require('mongoose');

const connectDb=async ()=>{
    try
    {
        const connect= await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    }
    catch(err)
    {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports=connectDb;   