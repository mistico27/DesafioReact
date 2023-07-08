import React from 'react'
import "./form.css"

export default function Form(){
    return(
        <>
       <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
            <div className="container-fluid flex-nowrap">
              <a className="navbar-brand" href="sesionnoiniciada.html"><img className="navbar1__logo"  src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"/></a>
                <div className="d-flex justify-content-between w-100">
                    <form className="d-flex" role="search">
                        <div className="searchbar__bar input-group d-none d-md-block">
                        <input className="searchbar__barrita" placeholder="Search..." size="30px" aria-label="Search"/> 
                        <button className="searchbar__lupa btn btn" type="button" id="button-addon2"><img className="Search1__icons" src="src/assets/search.svg"/></button>
                        </div>
                    </form>
                    <div className="navbar2__icons d-flex">
                        <button className="navbar2__notificacion btn btn d-md-none d-xl-none d-lg-none" type="button" id="button-addon2"><img className="Search1__icons" src="assets/search.svg"/></button>
                        <a className="navbar2__login btn d-none d-md-block" href="login.html" role="button">Log in</a>
                        <button className="navbar2__button"> Create account </button>
                    </div>
                </div> 
              </div>
            </nav>

            <div className="container pt-5">
            <div className="row">  
                        
            <div classname="container">
            <div classname="col-lg-12 col-md-9 col-lg-6">
                <div className="contaier-info">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="header titleHeader">
                                <h1 className="strong">Create your own Post</h1>
                            </div>
                        
                            <div className="row">
                        <div className="col-12 col-md-5">
                            <form id="Postcard-form" action="" className="bg-dark text-white border rounded p-3 mb-3">
                                <div className="form-group mb-3">
                                    <label for="">autor</label>
                                    <input name="autor" id="autor" type="text" className="form-control" placeholder="autor"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="">titulo</label>
                                    <input name="titulo" id="titulo" type="text" className="form-control" placeholder="titulo"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="">TAGS</label>
                                    <input name="tags" id="tags" type="text" className="form-control" placeholder="pon tu Tag"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="">Foto</label>
                                    <input name="picture" id="picture" type="text" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="">PostBody</label> 
                                <input type="text" className="form-control" id="postBody" name="postBody" placeholder="postbody"/>
                                </div>
                                <div className='haciendoFlex'>
                                <button className='save-card'>save card</button>
                                <button  className="return-Post">return</button>
                                </div>
                                </form>
                        </div>
                        
                    </div>
                    <div className="col-2 "></div>
                </div>
                
                </div>    
            </div>        
        </div>
        
        </div>
        </div>
        </div>
        </div>
        </>
    )

}    