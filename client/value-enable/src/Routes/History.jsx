import { Avatar, Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AvatarCard from '../components/AvatarCard'
import axios from '../myAxios'
const History = () => {
    const [policy, setPolicies] = useState()
    const navigate = useNavigate()
    useEffect(() => {
     getPolicies()   
    }, [])
    
    const getPolicies = async() => {
        const { data } = await axios.get("/policy", {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
        setPolicies([...data])
    }
  return (
      <Flex direction={"column"} gap="1rem">
          <Button colorScheme={"messenger"} onClick={()=>navigate("/Illustration")}>Go back to Illustration</Button>
          {policy?.length > 0 && policy?.map((el) => {
              return (
                  <AvatarCard  {...el} show={false} />
             )
          })}
    </Flex>
  )
}

export default History