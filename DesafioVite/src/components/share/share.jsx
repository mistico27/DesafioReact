import React from 'react'
import './share.css'


export default function Share(){
return(
        
            <div className="mainCard">
                <ul className="nav nav-pills mb-3">
                    <li className="nav-item">
                      <a className="nav-link" id="find-relevant"  href="#">Relevant</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="find-latest" href="#">Latest</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="find-top" href="#">Top</a>
                    </li>
                </ul>
                <div className="card post-card mb-3">
                    <img src="https://picsum.photos/400/200" className="card-img-top w-100 post-card__preview-image" 
                     alt="..."/>
                    <div className="card-body">
                        <div className="author-data d-flex gap-3 align-items-center">
                            <img className="post-card__author-picture" 
                             src="https://randomuser.me/api/portraits/men/11.jpg" alt=""/>
                            <div>
                                <p className="post-card__author-name">
                                   <b>Luis Daniel Cruz</b>
                                </p>
                                <p className="post-card__creation-date">
                                    23/03/2023
                                </p>
                            </div>

                        </div>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title 
                        and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  
                    <div id="PostCard-list">
    
                    </div>
                  
            </div>
       
    )
}