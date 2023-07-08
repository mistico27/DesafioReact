import React ,{useState,useEffect}from 'react'
import './feed.css'
import Share from '../share/share'
import Post from '../post/post'

export default function Feed(){
console.log("Aqui estoy en el index desde feed");
const getMytoken = localStorage.getItem("token");

    const baseURL = "http://localhost:8800";
    const[post,setPost]=useState([])
    useEffect(()=>{
        fetch(`${baseURL}/posts`,{
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization":`Bearer ${getMytoken}` },
        })
        .then(res=>res.json())
        .then(
            res=>setPost(res.data)
            );
        
    },[])
        
return(
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {post && post.map((posts)=>(
                <Post key={posts._id} posts={posts}/>
                ))}
                
            </div>
        </div>
    )
    

}