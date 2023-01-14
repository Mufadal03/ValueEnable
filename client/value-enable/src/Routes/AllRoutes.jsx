import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Req from '../PrivateRoute/Req'
import History from './History'
import Home from './Home'
import Illustration from './Illustration'
import Login from './Login'
import PolicyCalculation from './PolicyCalculation'
import Signup from './Signup'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/policy-calculation" element={<Req><PolicyCalculation /></Req>} />
            <Route path='/Illustration' element={<Req><Illustration /></Req>} />
            <Route path="/history" element={<Req><History /></Req>} />
       </Routes>
  )
}

export default AllRoutes