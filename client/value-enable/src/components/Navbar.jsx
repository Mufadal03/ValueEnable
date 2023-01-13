import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LoginSignup from './LoginSignup'

const Navbar = () => {
    const isAuth = useSelector(state => state.isAuth)
    // const isAuth = true
  return (
      <Flex border={"2px solid red"}  px='2rem' justifyContent={'space-between'} alignItems="center">
          <Box>
              <Image src={"https://valuenable.in/images/logo.png"} alt="Logo" h="10vh" />
          </Box>
          <Link to="/policy-calculation"><Text _hover={{textDecoration:"underline"}} fontSize={"2xl"} fontFamily={'cursive'}>Policy Calculation</Text></Link>
          {
              isAuth?<Button colorScheme={"messenger"}>Logout</Button>:<LoginSignup />
         }
      </Flex>
  )
}

export default Navbar