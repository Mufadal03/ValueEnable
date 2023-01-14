import { Box, Button, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AvatarCard from '../components/AvatarCard'
// import myAxios from '../myAxios'
import axios from "../myAxios"

const Illustration = () => {
    const [policy, setPolicies] = useState()
    const [latest, setLatest] = useState()
    const navigate= useNavigate()
    let bm =[]
    useEffect(() => {
     getPolicies()   
    }, [])
    
    const getPolicies = async() => {
        const { data } = await axios.get("/policy", {
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
        setPolicies([...data])
        setLatest({ ...data[data.length - 1] })

        
    }
    const printme = (d) => {
        bm.push(d)
    }
    const CalculateTotalBenifit = (arr) => {
        return arr.reduce((acc,el)=>acc+el,0)
    }
    return (
        <Box w="80%" m="1rem auto" >
            <Button onClick={()=>navigate("/")} w="100%" colorScheme={"pink"} mb='1rem'>Home</Button>
            {latest ? <AvatarCard {...latest} /> : null}
            {policy?.length > 1 ? <Link to="/history" ><Text fontFamily={"cursive"} fontStyle={'italic'} my='.5rem'>Show Prev {policy.length-1} Calculation</Text></Link> : null}
             <Text my='1rem' fontFamily={"cursive"} fontStyle="italic">Refer Below Table for your policy reference</Text>
            <TableContainer border={"1px solid rgba(1,1,1,0.5)"}>
                <Table variant={'striped'} >
                    <Thead>
                        <Tr>
                            <Th>Policy Year</Th>
                            <Th>Premium</Th>
                            <Th>Sum Assured</Th>
                            <Th>Bonus Rate</Th>
                            <Th>Bonus Amount</Th>
                            <Th>Total Benifit</Th>
                            <Th>Net CashFlow</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {latest ? new Array(Number(latest.policy_term)).fill(0).map((el, i) => {
                            const bonus = new Array(+latest.policy_term).fill(-1)
                            const bonusAmount = new Array(+latest.policy_term).fill(-1)
                            return (
                                <Tr key={i}>
                                    <Td>{i+1 }</Td>
                                    <Td>{i+1<=latest.premium_paying_term?latest.modal_premium:0 }</Td>
                                    <Td>{i+1==latest.policy_term?latest.sum_assured:0 }</Td>
                                    <Td>{bonus[i]=Math.floor(Math.random()*4)}%</Td>
                                    <Td>{bonusAmount[i]=(latest.modal_premium / 100) * bonus[i]}</Td>
                                    <Tr display={"none"}>{printme(bonusAmount[i])}</Tr>
                                    <Td>{i+1==latest.policy_term?CalculateTotalBenifit(bm):0 }</Td>
                                    <Td>{i + 1 <= latest.premium_paying_term ? "-" + latest.modal_premium : i + 1 == latest.policy_term ?+latest.sum_assured+CalculateTotalBenifit(bm) : 0}</Td>
                                </Tr>
                                
                            )
                        }):null}
                    </Tbody>
                </Table>
        </TableContainer>
    </Box>
  )
}

export default Illustration