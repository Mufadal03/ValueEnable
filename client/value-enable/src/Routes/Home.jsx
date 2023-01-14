import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const Home = () => {
    const { isLoading, isError, isAuth } = useSelector(state => {
        return {
            isAuth:state.isAuth
        }
    })
    console.log(isAuth)
    return (
        <Box>
            <Navbar />
            <Text>Backend Deployment Error please try to run server on local host</Text>
      </Box>
  )
}

export default Home