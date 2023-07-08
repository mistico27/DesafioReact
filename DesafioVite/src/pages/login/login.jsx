import React from 'react'
import './login.css'
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
export default function Login(){
    console.log("hey como andan Estamos en el archivo de login");
    const baseURL = "http://localhost:8800";
    const navigate = useNavigate();
    const {handleSubmit,register,formState:{errors}} =useForm();


    const goingToHome=(data)=>{
        console.log(data);
        fetch(`${baseURL}/auth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
          }).then((response) => response.json())
          .then((response) => {
            console.log("response Bienvenido ", response);
            if(response?.token){
              localStorage.setItem('token',response?.token)
              navigate("/home")
          }else{
              alert("aun no puedes entrar, identificate bro...");
          }
          })
          .catch(() => {
            alert("fallo el fetch :c");
          });
          
          }
          

    return(
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
                                <h1 className="strong">Welcome to DEV Community</h1>
                                <p className="lineGray">DEV Community is a community of 1,066,959 amazing developers</p>
                            </div>
                        
                            <div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-dark" type="button"><i className="fa-brands fa-apple"></i>  Continue with Apple</button>
                                    <button className="btn btn-greenAqua" type="button"><i className="fa-sharp fa-solid fa-recycle"></i>  Continue with Forem</button>
                                    <button className="btn btn-gray2" type="button"><i className="fa-brands fa-github"></i>  Continue with GitHub</button>
                                    <button className="btn btn-blue2" type="button"><i className="fa-brands fa-twitter"></i>  Continue with Twitter</button>
                                </div>
                            </div>
                            
                            <div className="lineGray">
                                <p className="lineGray"> Have a password? Continue with your email addres </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-2 "></div>
                </div>
                
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8"> 
                    <form onSubmit={handleSubmit(goingToHome)} className="row g-3 needs-validation" >
                    <div className="row mb-3">
                         <div className="form-group">
                         <label htmlFor="InputEmail" className="col-sm-2 "><strong>Email </strong></label>
                                <input  required
                                    className="form-control form-control-sm col-sm-10" {...register('email',{required:{value:true, message:"correo requerido"}})} />
                          </div>       
                          <div className="form-group">
                          <label htmlFor="InputPassword" className="col-sm-2 "><strong> Password</strong></label>
                                <input required minLength={"4"} type="Password"
                                     className="form-control form-control-sm col-sm-10" {...register('password',{required:{value:true, message:"password requerido"}})} />
                           </div>
                            </div>
                            
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Remember me
                                    </label>
                                    </div>
                                </div>
                            </div>  
                            <div className="d-grid gap-2">
                                <button className='btn btn-purple2'  type="submit" >Continue</button>
                            </div>
                            <div className="textCenter"> <a className='textCenter' href="#" target="_blank"> I forgot my password </a> </div>
                            <div id="alertSesion"> </div>
                    </form>
                    </div>
                    <div className="col-2"></div>
                </div>  
                </div>    
            </div>        
        </div>
        
        </div>

        </div>
    )
}