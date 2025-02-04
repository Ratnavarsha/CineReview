import React from 'react';
import './LogIn.css'; // Add custom styles here
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [mail,setMail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/login',{mail,password})
        .then(
            res=>{
                console.log("Login success")
            console.log(res.data);
            localStorage.setItem('currentUser',JSON.stringify(res.data));
            // console.log("Stored in local storage...");
            // console.log(JSON.parse(localStorage.getItem('currentUser')))
            navigate('/Home');
            alert("Login succesfull");
            
        }
    )
        .catch(
            err=>{
                console.log("Login failed");
                console.log(err)
            }
        )
    }
    return (
        <div className="position-relative vh-100">
            {/* Background image */}
        <div className="bg-blurred"></div>

            {/* Centered form */}
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="container bg-white p-4 rounded shadow" style={{ maxWidth: '400px' }}>
                    <h2 >CineReview</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h5>Login</h5>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e)=> setMail(e.target.value)}
                            />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 btn-danger custom-btn">
                            Login
                        </button>
                        <p>Dont have an account! <Link to="/Register">register here</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
