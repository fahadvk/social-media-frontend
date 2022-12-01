import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'
function PublicRoutes({ childern }) {
    const Navigate = useNavigate()
    const cookie = new Cookies()
    if (cookie.get('token')) {
        return Navigate("/")
    }
    else {
        return childern;
    }
}

export default PublicRoutes;