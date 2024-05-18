import React, { useState } from 'react'
import '../Login/login.css'

const Login = () => {
    const[user,serUser]=useState('login')
  return (
   <>
   {user==='login'?
    <div className='login container'>
      <div className="row">
        <div className="col">
            <div className='title p-3 m-1'>Sign In</div>
        <form className='p-3'>
            <div className="mb-3">
                <label for="InputEmail1" className="form-label">Username</label>
                <input type="email" className="form-control inputs" id="InputEmail" aria-describedby="emailHelp" placeholder='Username'/>
                </div>
            <div className="mb-3">
                <label for="InputPassword1" class="form-label">Password</label>
                <input type="password" className="form-control inputs " id="InputPassword" placeholder='Password'/>
            </div>
            <button type="submit" className="">Sign In</button>
            <div class="mt-3 form-check">
                <input type="checkbox" className="form-check-input" id="Check"/>
                <label class="form-check-label" for="Check">Remember Me</label>
            </div>
        </form>
        </div>
        <div className="login-side col text-center">
            <div className="side-text">
                    <div className="welcome mb-1 ">Welcome Back!</div>
                    <div >Don't have an account?</div>
                    <div className="sign-up mt-4 p-2" onClick={()=>{serUser('signup')}}>Sign Up</div>
            </div>
        </div>
      </div>
    </div>:<div className='signup container'>
      <div className="row">
      <div className="login-side col text-center">
            <div className="side-text">
                    <div className="welcome mb-1 ">Create your account</div>
                    <div >Already have an account?</div>
                    <div className="sign-up mt-4 p-2" onClick={()=>{serUser('login')}}>Log In</div>
            </div>
        </div>
        <div className="col">
            <div className='title p-1 m-1'>Sign Up</div>
        <form className='p-3'>
            <div className="mb-2">
                <label for="InputEmail" className="form-label">Username</label>
                <input type="email" className="form-control inputs" id="InputEmail" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-2">
                <label for="InputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control inputs" id="InputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-2">
                <label for="InputPassword1" class="form-label">Password</label>
                <input type="password" className="form-control inputs" id="InputPassword1"/>
            </div>
            <div className="mb-2">
                <label for="InputPassword" class="form-label">Confirm Password</label>
                <input type="password" className="form-control inputs" id="InputPassword"/>
            </div>
            <div class="mb-2 form-check">
                <input type="checkbox" className="form-check-input" id="Check1"/>
                <label class="form-check-label" for="Check1"></label>
            </div>
            <button type="submit" className="">Sign Up</button>
        </form>
        </div>
        
      </div>
    </div>}
   </>
  )
}

export default Login
