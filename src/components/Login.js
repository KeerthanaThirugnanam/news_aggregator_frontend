import React, { useState } from "react"
import axios from "axios"
import "./Login.css"
import { useNavigate, Link } from "react-router-dom"
//import { Svg } from 'react-svg';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';

import { EffectCreative } from 'swiper/modules';



function Login() {

    const history=useNavigate();
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')

async function submit(e){
e.preventDefault();
try{
await axios.post("https://samplemern-backend.onrender.com/",{
    email, password
})
.then(res=>{
    if(res.data==="exist"){
      alert("Welcome to News Aggregator")
        history("late/*",{state:{id:email}})
    }
    else if(res.data==="Incorrectpassword"){
          alert("User Has Entered Incorrect password")
    }
    else if(res.data==="Not exist"){
        alert("User have Not Signup")
    }
})

.catch(e=>{
    alert("Please fill the Details Properly")
    console.log(e);

})

}
catch(e){
      console.log(e);

}
}

return(

    <div className="container d-flex justify-content-center align-items-center " >
 <div className="row rounded-5 p-3 shadow box-area bg-transparent">

 <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box " >
 <Swiper
        grabCursor={true}
        effect={'creative'}

        autoplay={true}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        <SwiperSlide><img  src="/new2.jpg" style={{width:'100%',height: '100%',
          objectFit: 'cover',}} alt=""/> <div className="content">Biden tells Hill Democrats he is staying in the race</div> </SwiperSlide>
        <SwiperSlide><img src="/new3.jpg" style={{width:'100%',height: '100%',
          objectFit: 'cover',}} alt=""/><div className="content">India’s Modi makes first Russia visit since Ukraine invasion</div></SwiperSlide>
        <SwiperSlide><img src="/new4.webp" style={{width:'100%',height: '100%',
          objectFit: 'cover',}} alt=""/><div className="content">India lifts second T20 WC title after 17 years</div></SwiperSlide>
        <SwiperSlide><img src="/new5.webp" style={{width:'100%',height: '100%',
          objectFit: 'cover',}} alt=""/><div className="content">Mumbai’s heaviest one-day downpour since 2019</div></SwiperSlide>
        <SwiperSlide><img src="/new6.webp" style={{width:'100%',height: '100%',
          objectFit: 'cover',}} alt=""/><div className="content">Biden tells Hill Democrats he is staying in the race</div></SwiperSlide>
        <SwiperSlide><div className="content">Biden tells Hill Democrats he is staying in the race</div></SwiperSlide>
        <SwiperSlide><div className="content">Biden tells Hill Democrats he is staying in the race</div></SwiperSlide>
        <SwiperSlide><div className="content">Biden tells Hill Democrats he is staying in the race</div></SwiperSlide>
        <SwiperSlide><div className="content">Biden tells Hill Democrats he is staying in the race</div></SwiperSlide>
      </Swiper>

          
       </div> 

    <div className="col-md-6 right-box">
    <div className="login">
    <div className="row align-items-center">
    <div className="header-text mb-4">
                     <h2 className="text-white">Hello,Again</h2>
                     <p className="text-white">We are happy to have you back.</p>
         </div>
        <form action="POST" className="was-validated">
        <div className="input-group mb-3"> 
         <input className="form-control form-control-lg bg-light fs-6"  type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email"  pattern=".{8,}" required></input>
        
         <div className="valid-feedback">Valid.</div>
         <div className="invalid-feedback">Email is required.</div>
        
        
        </div>
        <div className="input-group mb-1">
         <input className="form-control form-control-lg bg-light fs-6" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Your Password"  pattern=".{8,}" required></input>
         
         <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Password is required.</div>
         </div>


         <div className="input-group mb-3 mt-3 d-flex justify-content-between">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-label text-secondary" id="formCheck"/>
                        <label for="formCheck" className="form-check-label text-secondary"><small className="text-white">Remember Me</small></label>
                    </div>
                    <div className="forgot">
                        <small><a className="text-decoration-none text-primary" href="/"><strong>Forgot Password?</strong></a></small>
                    </div>
        </div>
        
        <input className="btn btn-lg btn-primary w-100 fs-6" type="submit" onClick={submit}></input>
        </form>
       
       

       
        <div className="input-group mb-3">
          <button className="btn btn-lg btn-light w-100 fs-6 mt-3"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg> <small className="text-dark">Sign In with Google</small></button>
        </div>
        
          
        <div className="row " >
        <small className="text-white">Don't have account?  <Link to="/signup" className="text-primary text-decoration-none"> <strong>Signup </strong></Link></small>
         </div>
       
       
         </div>
         </div>
    </div>
          

    </div>
    </div>
)
}

export default Login
