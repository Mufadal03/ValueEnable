import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const Req = ({children}) => {
    const isAuth = useSelector(state => state.isAuth)
    console.log("private",isAuth)
    const location = useLocation()
    if (!isAuth) {
        return (
            <Navigate to="/login" state={{from:location}} replace/>
        )
    }
    return children
}

export default Req