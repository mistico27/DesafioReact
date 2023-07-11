import React,{useState,useEffect} from 'react'
import Topbar from '../../components/topbar/Topbar'
import RightBar from '../../components/rightbar/rightbar'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import "./home.css"

export default function Home(){
        //getposts
    const baseURL = "http://localhost:8800";
    const[posts,setPost]=useState([]);
    const[search,setSearch]=useState("");
    useEffect(()=>{
        const getMytoken = localStorage.getItem("token");
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
    <>
    
    <Topbar setSearch={setSearch} search={search}/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed posts={posts} search={search}/>
        <RightBar/> 
        </div> 
    </>
)

}