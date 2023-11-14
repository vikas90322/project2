import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../Stylesa/Login.css'
const Login = () => {
    const data=useLocation().state.SubmitedData;
    const navigate = useNavigate();
    const [loginData, setLoginData]= useState({
      email:"",
      password:"",
    })

    const handleChange=(e)=>{
        const{name, value}=e.target;
        setLoginData({
          ...loginData,
          [name]: value,
        })
      }
  

    const handleSubmit = (e) => {e.preventDefault();
        // navigate('/Dashboard', {state:{ Submitteddata: loginData}});

        if(data.email===loginData.email && data.password===loginData.password){
          navigate('/Task3', {state:{ Submitteddata: loginData}});
        }
        else{
            alert("Worng Credencials");
        }
      }
  

  return (
    <div className='Logincon'>
        
<form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="email">Email:</label><br />
        <input
           type="email"
           placeholder="Email"
           name='email'
           value={loginData.email} required onChange={handleChange}
          
         />
       </div>
        <div>
          <label htmlFor="password">Password:</label><br />
          <input
           type="password"
           placeholder="Password"
           name='password'
           value={loginData.password} required onChange={handleChange}
          
         />
        </div>
         <div ><a href="/Register">Forget Password</a></div>
        <div> <button >Sign In</button></div>
</form>



    </div>
  )
}

export default Login
