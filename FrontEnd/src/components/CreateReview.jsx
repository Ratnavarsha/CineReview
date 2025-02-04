import React, { useState } from 'react'
import './CreateReview.css'
import Header from './Header.jsx'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const CreateReview = () => {
    const [movieName,setMovieName] = useState('');
    const [movieCast,setMovieCast] = useState('');
    const [movieCrew,setMovieCrew] = useState('');
    const [movieRating,setMovieRating] = useState(0);
    const [movieDescription,setMovieDescription] = useState('');
    const [movieVerdict,setMovieVerdict] = useState('');
    const reviewer=(JSON.parse(localStorage.getItem('currentUser'))).currentUser;
    
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        console.log("Submit clicked");
        e.preventDefault();
        axios.post('http://localhost:5000/post',{
            movieName,
            movieCast,
            movieCrew,
            movieRating,
            movieDescription,
            movieVerdict,
            reviewer
        })
        .then(res=>{
            const user=JSON.parse(localStorage.getItem('currentUser'));
            console.log(user);

            axios.put(`http://localhost:5000/post/${user.currentUser}`).then(res=>{
                console.log(res);
                localStorage.setItem('currentUser',JSON.stringify({currentUser:user.currentUser,
                    reviewsCount: res.data.data,
                    profilePic:user.profilePic
                }))
                alert("Count incremented");

            })
            .catch(err=>console.log(err));


            alert("Review uploaded");
            navigate('/Home')
        })
        .catch(err=>console.log(err))

    }






    return (
        <>
            <Header />
            <div className="create-review-container">
                <h3>Create Review</h3>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Movie Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e)=>setMovieName(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Movie Cast</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e)=>setMovieCast(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Movie Crew</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e)=>setMovieCrew(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Movie Rating</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e)=>setMovieRating(e.target.value)}/>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Your Review</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e)=>setMovieDescription(e.target.value)}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Verdict</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e)=>setMovieVerdict(e.target.value)}/>
                </div>

                <button className='btn btn-danger' onClick={handleSubmit}>Submit Review</button>


            </div>
        </>
    )
}

export default CreateReview