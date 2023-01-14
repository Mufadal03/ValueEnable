import React, { useEffect } from 'react'
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react"
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { signUp } from '../redux/authRedux/actions'
import { SIGNUP_SUCCESS } from '../redux/authRedux/actionTypes'
const Signup = () => {
  const [disable, setDisable] = useState(true)
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password:""
  })
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]:value
    })
  }
  useEffect(() => {
  const { name, email, password } = userData
   if(name!=""&&email!=""&&password!="")setDisable(false)
  }, [userData])
  
  const handleSubmit = () => {
    const { name, email, password } = userData
    if (name == '' || email == "" || password == "") return
    dispatch(signUp(userData)).then((r) => {
      if (r.type == SIGNUP_SUCCESS) {
        navigate("/login")
      }
    })
  }

  

    return (
    <Flex h='100vh' >
      <Box w='50%' bgImage={`url(https://platform.valuenable.in/assets/images/login-banner.png)`} bgPosition="center" bgSize={'cover'} ></Box>
      <Box w="50%">
        <Flex direction={"column"} gap="2rem" px='2rem' border={"1px solid rgba(1,1,1,0.5)"} w="70%" h="500px" m={"5rem auto"}>
          <Image src='https://platform.valuenable.in/assets/images/logo.png' alt="logo" h="100px" m="1rem auto" />
          <Input type='text'  name="name"  onChange={handleChange} placeholder="name" />
          <Input type="email"  name="email"  onChange={handleChange} placeholder='email' />
          <Input type="password" name="password"  onChange={handleChange} placeholder='password' />
            <Button disabled={disable} colorScheme={"messenger"} onClick={handleSubmit}>Signup</Button>
          <Link to="/login"><Text >have an account ? LogIn</Text></Link>
            
        </Flex>
      </Box>
   </Flex>
  )
}

export default Signup