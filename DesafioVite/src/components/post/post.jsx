import React from 'react'
import './post.css'
import {MoreVert} from "@mui/icons-material"

import {useState,useEffect} from 'react'


export default function Post({posts}){
    const [like,setLike]=useState(posts.likes);
    const [isLiked,setIsLiked]=useState(false);
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
        
    },[posts.userId])

    Array.isArray(user)
    
    const getProfilePicture=()=>{
        for(let i=0; i<user.length; i++){
            if(posts.userId===user[i].id){
                   return user[i].profilePicture; 
            }
        }
    }

    const getName=()=>{
        for(let i=0; i<user.length; i++){
            if(posts.userId===user[i].id){
                   return user[i].username; 
            }
        }
    }

    const likeHandler =()=>{
        setLike(isLiked ? like-1:like+1)
        setIsLiked(!isLiked)
    }
    
    const goToEdit=()=>{
        window.location.replace(`/edit?postCardId=${posts._id}`);
        localStorage.setItem( "postCardId", JSON. stringify(posts._id));
    }


    const Removefunction = () => {
        let mypostId= posts._id;
        console.log(mypostId)
        if (window.confirm('Do you want to remove?')) {
            fetch(`${baseURL}/posts/${mypostId}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json", "Authorization":`Bearer ${getMytoken}` },
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

return(
        <div className='post'>
           <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImage' src={getProfilePicture()} alt="" />
                    <span className='postUserName'>
                    {getName()}
                    </span>
                    <span className='postDate'>{posts.createdAt}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                    <button className='Edit card' onClick={goToEdit}>Edit Card</button>
                    <button className='Delete card' onClick={Removefunction}>Delete Card</button>
                </div>
            </div>
            <span className="postText"> {posts.title}</span>
            <div className="postCenter">
            
                <span className="postText">{posts?.desc}</span>
                <img className='postImg'  alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="src/assets/like.png"  onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="src/assets/megusta.png"  onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight"></div>
                <span className="postCommentText"> comments</span>
            </div>
           </div>
        </div>
    );

    
}