import React, { useState } from 'react'
import './Header.css'
import pauseButton from '../assets/pause-button.png'
import { useNavigate } from 'react-router-dom'
const Header = ({onSearch}) => {
  const navigate=useNavigate();
  const [search,setSearch]=useState('');

  const handleClick=()=>{
    onSearch(search);
  }

  return (
    <>
    <div className="navigation">

      <div className="details-section">
        <img src={pauseButton} alt="logo" width="7%" style={{display:"block"}} className='logo'/>
        <div className="name">CineReview</div>
      </div>

      <div className="search-section">
        <input type="text" className='form-control me-2' placeholder='Search a review'  onChange={(e)=>setSearch(e.target.value)} />
        <button className='btn btn-danger custom-search-btn' onClick={()=>handleClick()} >Search</button>
      </div>

      <div className="account-section">
        <button className='btn btn-danger custom-log-out-btn' onClick={()=>{
            localStorage.clear();
            navigate('/');

        } }>log out </button>
      </div>

      
    </div>  
    </>
  )
}

export default Header
