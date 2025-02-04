const express=require('express');
const app=express();
const env=require('dotenv');
const cors=require('cors')
const connectDb=require('./config/db.js');


const registerRouter = require('./routes/userRegisterRoute.js');
const logInRouter = require('./routes/userLogInRoute.js');
const getPostsRouter=require('./routes/getPostsRoute.js');
const submitReviewRouter=require('./routes/submitReviewRoute.js');
const updateReviewCountRouter=require('./routes/updateReviewCountRoute.js');





env.config();
connectDb();

app.use(express.json());
app.use(cors());


app.use('/',registerRouter);
app.use('/',logInRouter);
app.use('/',getPostsRouter);
app.use('/',submitReviewRouter);
app.use('/',updateReviewCountRouter);




app.listen(5000,()=>{
    console.log("Server started");
})