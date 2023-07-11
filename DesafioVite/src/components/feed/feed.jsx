import React ,{useState,useEffect}from 'react'
import './feed.css'
import Share from '../share/share'
import Post from '../post/post'


export default function Feed({posts,search}){
console.log("Aqui estoy en el index desde feed");

        
return(
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {posts && posts.filter(post=>{
                    if(!search){
                        return true;
                    }
                 return post.title.toLowerCase().includes(search.toLowerCase());
                }).map((post)=>(
                <Post key={post._id} posts={post}/>
                ))}
                
            </div>
        </div>
    )
    

}