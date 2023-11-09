import { Box } from '@chakra-ui/react'
import React from 'react'
import LoihaProp from './loihaProp'

const Loiha = () => {
  return (
    <Box display={'flex'} className='bgColor'  height={'100%'}  >

            <Box>
                <Box height={'100%'} width={'1px'} bgColor={'#3B3B3B'} ></Box>
            </Box>
        <Box  display={'flex'} flexDirection={'column'} gap={'10px'} mt={'30px'}>
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
            <LoihaProp />
        </Box>
    </Box>
  )
}

export default Loiha