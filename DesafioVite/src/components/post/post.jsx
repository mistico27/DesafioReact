import React from 'react'
import './post.css'
import {MoreVert} from "@mui/icons-material"

import {useState,useEffect} from 'react'

export default function Post({posts}){
    console.log(posts);
    const getMytoken = localStorage.getItem("token");
    const baseURL = "http://localhost:8800";
    const[user,setUser]=useState([])
    useEffect(()=>{
        fetch(`${baseURL}/users`,{
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization":`Bearer ${getMytoken}` },
        })
        .then(res=>res.json())
        .then(
            res=>setUser(res.data),
            );
        
    },[])
   
return(
        <div className='post'>
           <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImage' src={user.profilePicture} alt="" />
                    <span className='postUserName'>
                    {name}
                    </span>
                    <span className='postDate'>{posts.createdAt}</span>
                </div>
                <div className="postTopRight">
                <span className="postText">{posts.title}</span>
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{posts?.desc}</span>
                <img className='postImg'  alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/emoticons/like.png" alt="" />
                    <img className='likeIcon' src="/assets/emoticons/megusta.png"  alt="" />
                    <span className="postLikeCounter"></span>
                </div>
                <div className="postBottomRight"></div>
                <span className="postCommentText"> comments</span>
            </div>
           </div>
        </div>
    );

    
}