import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AvatarCard from '../components/AvatarCard'
// import myAxios from '../myAxios'
import axios from "../myAxios"

const Illustration = () => {
    const [policy, setPolicies] = useState()
    const [latest, setLatest] = useState()
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
        <Box w="80%" m="3rem auto" border={"1px solid rgba(1,1,1,0.5)"}>
            {/* <AvatarCard /> */}
            <TableContainer>
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