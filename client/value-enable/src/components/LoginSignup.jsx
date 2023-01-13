import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
           <Flex alignItems={"center"} gap="2rem"> 
              <Link to="/login"><Button colorScheme={"messenger"}>Login</Button> </Link>
             <Link to="/signup"><Button colorScheme={"facebook"}>Signup</Button> </Link>
          </Flex>
  )
}

export default LoginSignup