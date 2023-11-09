import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { user } from '../../assets'


const PortfolioProp = () => {
  return (
    <Box>
        <Box >

                <Box mt={'20px'} bg={'#1F1F1F'} width={'100%'} rounded={'15px'} _hover={{rounded: '0', borderColor: '#8C52FF'}} p={'18px'}  borderColor={'gray'} borderWidth={'0.1px'} display={'flex'} justifyContent={'space-between'} gap={'40px'} alignItems={'center'}>
                    <Box display={'flex'} flexDirection={'column'} gap={'50px'} >
                        <Box>
                            <Text fontSize={'28px'} color={'white'}>Loiha nomi</Text>
                            <Text fontSize={'12px'} color={'#8E8E8E'} >React js , Chakra ui</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'} color={'#8E8E8E'}>20.01.2023</Text>
                        </Box>
                    </Box>
                    <Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'50px'} alignItems={'flex-end'} >
                        <Image src={user} width={'50px'} height={'50px'} rounded={'100%'}  _hover={{rounded: '0'}} />
                        <Text fontSize={'12px'} color={'#7A69E9'} >Tanishib chiqish</Text>
                    </Box>
                    </Box>

                </Box>

                
            </Box>
    </Box>
  )
}

export default PortfolioProp