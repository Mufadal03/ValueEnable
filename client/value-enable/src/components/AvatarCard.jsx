import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AvatarCard = (props) => {
    console.log(props)
    return (
      <>
            <Flex border={"1px solid rgba(1,1,1,.5)"} h="300px" w='80%' m="auto" textAlign={"left"}>
                
          <Flex justifyContent={"center"}alignItems="center"flexGrow="1"> 
              <Avatar h="200px" w='200px'/>
          </Flex>
          <Flex flexGrow="3" direction={"column"} gap=".5rem" justifyContent={"center"}>
              <Heading fontFamily="cursive" fontSize={'2xl'}>Welcome {props.name }</Heading>
              <Heading fontFamily="cursive" fontSize={'2xl'}>{ props.email}</Heading>
              <Heading fontFamily="cursive" fontSize={'2xl'}>Policy term { props.policy_term} years</Heading>
              <Heading fontFamily="cursive" fontSize={'2xl'}>Policy paying term {props.premium_paying_term} years</Heading>
                    <Heading fontFamily="cursive" fontSize={'2xl'}>Choosen frequency {props.premium_frequency}</Heading>
                    <Heading fontFamily="cursive" fontSize={'2xl'}>{props.premium_frequency} Due { props.modal_premium} Rs</Heading>
              <Heading fontFamily="cursive" fontSize={'2xl'}>Sum assured {props.sum_assured } Rs</Heading>
          </Flex>
      </Flex>
           
      </>
  )
}

export default AvatarCard