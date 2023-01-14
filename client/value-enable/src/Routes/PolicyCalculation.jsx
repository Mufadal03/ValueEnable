import React from 'react'
import {Box, Button, Flex, Heading, Input, Select, Text, useToast} from "@chakra-ui/react"
import { useState } from 'react'
import { Validate } from '../CalcFns/validate'
const PolicyCalculation = () => {
  const toast = useToast()
  const [disable,setDisable] = useState(true)
  const [policy, setPolicy] = useState({
    DOB: "",
    gender: '',
    sum_assured: 0,
    modal_premium: "",
    policy_term: "",
    premium_paying_term:"",
    premium_frequency:""
  })
  const handleChange = (e) => {
    const { name, value } = e.target 
    setPolicy({
      ...policy,
      [name]:value
    })
  }
  const handleSubmit = () => {
    console.log(policy)
    const res = Validate(policy)
    if (res===true) {
      console.log("PASSED ALL VALIDATION")
    } else {
      const message = Validate(policy)
      toast({
        title: 'Calculation Failed.',
        position:"top",
          description: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
    }
  }
  return (
    <Box>
      <Heading fontFamily={"cursive"} fontWeight="md" >Calculate your policy with Value Enable's Calculator</Heading>

      <Flex direction={"column"} gap="1rem" border={"2px solid red"} w='700px' m="3rem auto" p='2rem'>
        <Flex alignItems="center"gap='1rem' borderBottom={"1px dashed rgba(1,1,1,0.5)"} pb="0.5rem">
            <label htmlFor='date'>Select Date Of Birth</label>
          <Input type="date"name="DOB" onChange={handleChange} id='date' max={'2023-01-31'} w="fit-content" />
          <label htmlFor='gender'>Select Gender</label>
          <Select id="gender" name="gender"  onChange={handleChange}w='fit-content'>
            <option value="NA">Select your gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            </Select>
        </Flex>
          <Flex alignItems="center" gap='1rem' borderBottom={"1px dashed rgba(1,1,1,0.5)"} pb="0.5rem">
          <label htmlFor="sumAssured">Sum Assured</label>
          <Input type={'number'} name="sum_assured" onChange={handleChange} id="sumAssured" placeholder="Enter Sum Assured" w="30%" />
          <label htmlFor="premium">Modal Premium</label>
          <Input type={'number'} name="modal_premium" onChange={handleChange} id="premium" placeholder="Enter Modal Premium" w="30%" />
        </Flex>
        <Flex alignItems="center" gap='1rem' borderBottom={"1px dashed rgba(1,1,1,0.5)"} pb="0.5rem">
          <label htmlFor="pt">Policy term</label>
          <Input type={'number'} name="policy_term" onChange={handleChange} id="pt" placeholder="Enter Policy term" w="50%" />
        </Flex>
        <Flex alignItems="center" gap='1rem' borderBottom={"1px dashed rgba(1,1,1,0.5)"} pb="0.5rem">
          <label htmlFor="ppt">Premium paying term</label>
          <Input type={'number'} id="ppt" name="premium_paying_term" onChange={handleChange} placeholder="Enter premium paying term" w="50%" />
        </Flex>
        <Flex alignItems="center" gap='1rem' borderBottom={"1px dashed rgba(1,1,1,0.5)"} pb="0.5rem">
          <label htmlFor='freq' >Select Premium Frequency</label>
        <Select id="freq" name='premium_frequency' onChange={handleChange} w='fit-content'>
          <option value="NA">Select Premium frequency</option>
          <option value="yearly">Yearly</option>
          <option value="half-yearly">Half yearly</option>
          <option value="monthly">Monthly</option>
          </Select>
        </Flex>
        
        <Button colorScheme={"green"} onClick={handleSubmit}>Calculate Policy</Button>
        <Button colorScheme={"pink"} disabled={disable} >Show Illustration</Button>
      </Flex>
    </Box>
  )
}

export default PolicyCalculation