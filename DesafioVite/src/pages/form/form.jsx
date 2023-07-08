import React from 'react'
import "./form.css"
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";


export default function Form(){

    const baseURL = "http://localhost:8800";
    const navigate = useNavigate();
    const getMytoken = localStorage.getItem("token");
    const {handleSubmit,register,formState:{errors}} =useForm();

    const sendForm=(data)=>{
        fetch(`${baseURL}/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization":`Bearer ${getMytoken}` },
            body: JSON.stringify({
                autor:data.autor,
                title:data.title,
                desc:data.desc,
                img:data.img
            }),
          }).then((response) => response.json())
          .then((response) => {
            console.log("Post Creado exitosamente ", response);
            navigate("/home")
          }).catch(() => {
            alert("fallo el metodo Fetch");
          });
    
    
    }

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
                        
            <div className="container">
            <div className="col-lg-12 col-md-9 col-lg-6">
                <div className="contaier-info">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="header titleHeader">
                                <h1 className="strong">Create your own Post</h1>
                            </div>
                        
                            <div className="row">
                        <div className="col-12 col-md-5">
                            <form onSubmit={handleSubmit(sendForm)} className="bg-dark text-white border rounded p-3 mb-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="">autor</label>
                                    <input name="autor" required id="autor" type="text" className="form-control" 
                                    {...register('autor',{required:{value:true, message:"correo requerido"}})}
                                     placeholder="autor"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">titulo</label>
                                    <input name="titulo" id="titulo" type="text" className="form-control" 
                                    {...register('title',{required:{value:true, message:"correo requerido"}})}
                                    placeholder="titulo"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">TAGS</label>
                                    <input name="tags" id="tags" type="text" className="form-control" 
                                    placeholder="pon tu Tag"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Foto</label>
                                    <input name="picture" id="picture" type="text" className="form-control"
                                    {...register('img',{required:{value:true, message:"correo requerido"}})}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">PostBody</label> 
                                <input type="text" className="form-control" id="postBody" name="postBody" 
                                {...register('desc',{required:{value:true, message:"correo requerido"}})}
                                placeholder="postbody"/>
                                </div>
                                <div className='haciendoFlex'>
                                <button className='save-card'  type="submit" >save card</button>
                                <button  className="return-Post" onClick={e =>{
                                                   e.preventDefault();
                                                   window.location.replace('/Home');
                                    }}>return</button>
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