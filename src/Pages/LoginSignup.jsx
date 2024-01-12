import React from 'react'
import './CSS/loginsignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>Sign Up</h2>
        <div className="login-signup-field">
          <input type='text' placeholder='Enter Your Name'/>
          <input type='email' placeholder='Email address'/>
          <input type='password' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>Agree to terms and conditions</p>
        </div>
      </div>
    </div>
  )
}
