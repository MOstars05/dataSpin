import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import PortfolioProp from './portfolioProp'

const Portfolio = () => {
  return (
    <Box ml={'221px'} pt={'380px'} className={'bgColor'} >
        <Box ml={'60px'}>
            <Box><Text fontSize={'15px'} color={'#8E8E8E'}>Portfolio</Text></Box>
        </Box>

        <Box pr={'20px'}>
            <Box display={'flex'} ml={'65px'} gap={'110px'} >
                <PortfolioProp />
                <PortfolioProp />
            </Box>

            <Box display={'flex'} ml={'65px'} gap={'110px'}>
                <PortfolioProp />
                <PortfolioProp />
            </Box>

            <Box display={'flex'} ml={'65px'} gap={'110px'}>
                <PortfolioProp />
                <PortfolioProp />
            </Box>

            <Box display={'flex'} ml={'65px'} gap={'110px'}>
                <PortfolioProp />
                <PortfolioProp />
            </Box>

            <Box display={'flex'} ml={'65px'} gap={'110px'}>
                <PortfolioProp />
                <PortfolioProp />
            </Box>

            <Box display={'flex'} ml={'65px'} gap={'110px'}>
                <PortfolioProp />
                <PortfolioProp />
            </Box>


        </Box>
        

    </Box>
  )
}

export default Portfolio