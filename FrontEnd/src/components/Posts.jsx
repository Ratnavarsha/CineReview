import React from 'react'
import './Posts.css'

const Posts = ({posts}) => {
    console.log("Posts received",posts)
    const obj=JSON.parse(localStorage.getItem('currentUser'));

    function handleLikeBtn(event)
    {
        event.target.textContent="Liked";
        event.target.classList.add('btn-danger');
        event.target.style.color="white";
    }
  return (
    <>
        
        <div className="posts-container">
            {posts.length > 0 ? (posts.map((ele,ind)=>{
                    return (
                        <div className="post">
                            
                        <div className="content">
                        <p className="profile-name">{ele.createdBy}</p>
                         <div>
                           <span>Movie: </span>{ele.movieName}
                        </div>
                        <div> <span>Cast: </span>{ele.castDetails}</div>
                        <div><span>Crew: </span> {ele.crewDetails}</div>
                         <div><span>Rating: </span>{ele.rating}</div>
                         <div><span>Review: </span>{ele.reviewDescription}</div>
                         <div><span>Verdict: </span>{ele.verdict}</div>
                         <button className="like btn btn-outline-danger btn-sm" onClick={(e)=>handleLikeBtn(e)}>Like </button>
                        </div>
                        
                    </div>
                    )
                })):(<p>No results found</p>)}
        </div>
    </>
  )
}

export default Posts