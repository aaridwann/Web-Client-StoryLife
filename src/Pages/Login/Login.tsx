import React from 'react'
import './Login.scss'
import google from './google.png'

function Head() {
  return (<div className='head'>
    <h1>Story Life</h1>
    <p>Best Story - Best Vendor - Best Price</p>
  </div>);
}



function Form() {
  return (<form className='form'>
    <h2>Login</h2>
    <div>
      <p>username</p>
      <input type='text' placeholder='username' />
      <p>password</p>
      <input type='text' placeholder='password' />
      <button className='btn-submit'>Login</button>
    </div>
    <div>

    <button className='sign'>
      <img width='60' height='40' alt='google' src={google} />
      <p>Login google</p>
    </button>
    <button className='sign'><p>Sign up</p></button>
    </div>
  </form>);
}


export default function Login() {
  return (
    <div className='container'>
      <Head />
      <Form />
    </div>
  )
}
