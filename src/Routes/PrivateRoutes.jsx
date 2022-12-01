import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie'
import { verifyuser } from '../apiRequests/authapis';
import { setAuth, setName } from '../store/authSlice'
function PrivateRoute({ children }) {
    const cookie = new Cookies
    const token = cookie.get('token')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state.authReducer)
    async function verify() {
        let res = await verifyuser()
        if (res.data.id) {
            dispatch(setAuth(true))
            dispatch(setName(res.data.name))
        }
    }

    if (token) {
        verify()
        if (auth) {
            return children;
        }
        else {
            setTimeout(() => {
                return Navigate('/login')
            }, 1000)
        }
    }
    else {
        setTimeout(() => {
            return Navigate('/login')
        }, 1000)
    }





}

export default PrivateRoute;







