import React from 'react'
import './Home.css'
import Posts from './Posts'
import Header from './Header'
import Profile from './Profile'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Home = () => {
  const [posts,setPosts]=useState([]);
  const [filteredPosts,setFilteredPosts] = useState([]);
  
    useEffect(()=>{
      const getPosts =async ()=>{
        const info= await axios.get('http://localhost:5000/posts');
        console.log("Posts fetched")
        setPosts(info.data);
        setFilteredPosts(info.data)
      }
      getPosts();
    },[])

    const filterPosts= (query)=>{
          if(query==='')
          {
            setFilteredPosts(posts);
          }
          else
          {
            const results=posts.filter(post => post.movieName.toLowerCase().includes(query.toLowerCase()));
            setFilteredPosts(results);
          }
    }



  return (
    <>
    <Header onSearch={filterPosts}></Header>
    <div className="content-container">
        <div className="posts">
          <Posts posts={filteredPosts}/>
        </div>
        <div className="profile">
          <Profile />
        </div>
      </div>
    </>
  )
}

export default Home