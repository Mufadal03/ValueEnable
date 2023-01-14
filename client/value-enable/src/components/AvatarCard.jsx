import { Avatar, Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const AvatarCard = (props) => {
  return (
      <Flex border={"2px solid red"} h="300px" w='80%' m="auto" textAlign={"left"}>
          <Flex justifyContent={"center"}alignItems="center" border={"2px solid green"} flexGrow="1"> 
              <Avatar h="200px" w='200px'/>
          </Flex>
          <Flex border={"2px solid blue"} flexGrow="3" direction={"column"}>
              <Heading>Name</Heading>
              <Heading>Email</Heading>
              <Heading>Policy term</Heading>
              <Heading>Policy paying term</Heading>
          </Flex>
   </Flex>
  )
}

export default AvatarCard