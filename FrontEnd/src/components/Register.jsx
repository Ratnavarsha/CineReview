import React from 'react';
import './Register.css'; // Add custom styles here
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [mail,setMail]=useState();
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMail('')
        setName('')
        setPassword('')
        axios.post('http://localhost:5000/register',{mail,name,password})
        .then(response =>{
            console.log(response);
            window.alert("Registartion successful")
            navigate('/');
        })
        .catch(err => console.log(err)
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
                        <h5>Register</h5>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e)=>setMail(e.target.value) }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail2">User name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail2"
                                aria-describedby="emailHelp"
                                placeholder="Enter user name"
                                onChange={(e)=> setName(e.target.value) }
                            />
                        </div>



                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Set Password"
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 btn-danger custom-btn">
                            Register
                        </button>
                        {/* <Link to="/SignUp">hi</Link> */}
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;
