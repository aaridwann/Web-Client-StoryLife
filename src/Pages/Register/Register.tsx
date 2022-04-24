import React, { Component } from 'react'
import './Register.style.scss'

export default class Register extends Component {

    componentDidMount(){
        document.title = "dfsdfsdfsd"
      }

    render() {
        return (
            <div className='containerRegister'>
                <title>Register</title>
                <form className='formRegister'>
                    <input type='text' placeholder='Fullname' />
                    <input type='text' placeholder='Username' />
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <input type='password' placeholder='Confirmation Password' />
                    <button>Register</button>
                    <div className='have'>
                        <p>Have account ? <p>Login here</p></p>
                    </div>
                </form>
            </div>
        )
    }
}
