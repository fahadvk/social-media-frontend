import React, { useState } from "react"
import './index.css'
import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setAuth, setName } from "../../store/authSlice";
import { Paper } from '@mui/material';
import { loginapi } from "../../apiRequests/authapis"
import { useNavigate } from "react-router-dom"
import Cookies from 'universal-cookie'

const Login = () => {

    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await loginapi({ email: emailRef.current.value, password: passwordRef.current.value })
        if (response.data.name) {
            let cookie = new Cookies()
            cookie.set('token', response.data.token)
            dispatch(setName(response.data.name))
            dispatch(setAuth(true))
        }
    }
    const paperstyle = { padding: 20, height: '60vh', width: 400, margin: '100px auto', "background-color": "" }
    return (
        <div className="auth-form-container Login">

            <Paper elevation={5} style={paperstyle} >


                <h2 className="head mt-3 text-3xl font-bold font-mono"> Login</h2>

                <form className="mt-2 login-form" onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input autoComplete="false" size='25' ref={emailRef} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
                    <label htmlFor='Password'>Password</label>
                    <input size='25' ref={passwordRef} type='Password' placeholder='Enter your Password' id='password' name='Password' />
                    <button className="btn-login mt-3" type="submit" > Login</button>
                </form>



                <button className="mt-4 link-btn" onClick={() => { Navigate('/signup') }} type="submit"> Don't have an account ? Register</button>
            </Paper>

        </div>
    )
}
export default Login