import React, { useEffect } from 'react'
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LogIn } from '../redux/authRedux/actions'
import { LOGIN_SUCCESS } from '../redux/authRedux/actionTypes'
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" })
  const [disable,setDisable] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
   const comingFrom = location.state?.from?.pathname
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  useEffect(() => {
  const { password, email } = user
   if(password!=""&&email!="")setDisable(false)
  }, [user])
  
  const handleSubmit = () => {
    const { name, email } = user
    if (name == '' || email == "" ) return
    dispatch(LogIn(user)).then((r) => {
      if (r.type == LOGIN_SUCCESS) {
        navigate(comingFrom?comingFrom:"/",{replace:true})
      }
    })
  }

  return (
    <Flex h='100vh' >
      <Box w='50%' bgImage={`url(https://platform.valuenable.in/assets/images/login-banner.png)`} bgPosition="center" bgSize={'cover'} ></Box>
      <Box w="50%">
        <Flex direction={"column"} gap="2rem" px='2rem' border={"1px solid rgba(1,1,1,0.5)"} w="70%" h="500px" m={"5rem auto"}>
          <Image src='https://platform.valuenable.in/assets/images/logo.png' alt="logo" h="100px" m="1rem auto" />
          <Input type="email" onChange={handleChange} name="email" placeholder='email' />
          <Input type="password" onChange={handleChange} name="password" placeholder='password' />
          <Button disabled={disable} colorScheme={"messenger"} onClick={handleSubmit}>Login</Button>
          <Link to="/signup"><Text >Don't have an account ? signIn</Text></Link>
        </Flex>
      </Box>
   </Flex>
  )
}

export default Login