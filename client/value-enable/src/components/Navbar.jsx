import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogOut } from '../redux/authRedux/actions'
import LoginSignup from './LoginSignup'

const Navbar = () => {
    const isAuth = useSelector(state => state.isAuth)
    const dispath=useDispatch()
    // const isAuth = true
  return (
      <Flex border={"2px solid red"}  px='2rem' justifyContent={'space-between'} alignItems="center">
          <Box>
              <Image src={"https://valuenable.in/images/logo.png"} alt="Logo" h="10vh" />
          </Box>
          <Link to="/policy-calculation"><Text _hover={{textDecoration:"underline"}} fontSize={"2xl"} fontFamily={'cursive'}>Policy Calculation</Text></Link>
          {
              isAuth?<Button colorScheme={"messenger"} onClick={()=>dispath(LogOut())}>Logout</Button>:<LoginSignup />
         }
      </Flex>
  )
}

export default Navbar