import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Req from '../PrivateRoute/Req'
import Home from './Home'
import Login from './Login'
import PolicyCalculation from './PolicyCalculation'
import Signup from './Signup'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/policy-calculation" element={<Req><PolicyCalculation /></Req>}/>
       </Routes>
  )
}

export default AllRoutes