import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const obj = JSON.parse(localStorage.getItem('currentUser'));
    const navigate = useNavigate();

    return (
        <>
            <div className="profile-container">

                <p className="profile-name">Welcome '{obj.currentUser}'</p>

                <div>
                    <div className="posts">
                        <strong>Number of Posts: </strong>{obj.reviewsCount}
                    </div>
                </div>

                <button 
                    className="btn btn-danger custom-post-btn" 
                    onClick={() => navigate('/post')}
                >
                    Post a Review
                </button>

            </div>
        </>
    );
};

export default Profile;
