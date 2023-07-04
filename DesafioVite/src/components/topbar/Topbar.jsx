import React from 'react'
import "./topbar.css"
import {Search,Person3,Chat,Notifications} from "@mui/icons-material"

export default function Topbar(){
return(
    <div className="topbarcontainer">
        <div className="topbarLeft">
            <span className="logo">
                DEVTO
            </span>
        </div>
        <div className="topbarcenter">
            <div className='searchbar'>
               <Search className="searchIcon"/>
               <input placeholder='Search...' className="searchinput"/> 
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarlink">HomPage</span>
                <span className="topbarlink">Timeline</span>

            </div>
            <div className="topbarIcons">
               
            </div>

            <img src="/assets/5.2 Isabel Cortes.jpg" alt="" className="topbarImg" />
        </div>


        
    </div>
)

}