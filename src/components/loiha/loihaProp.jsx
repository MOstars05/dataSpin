import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { user } from '../../assets'

const LoihaProp = () => {
  return (
    <Box >
        <Box pt={'10px'} pl={'25px'} pr={'36px'} >
            <Box  bgColor={'#1F1F1F'}  borderWidth={'0.1px'} borderColor={'gray'} rounded={'10px'} _hover={{rounded: '0'}} p={'15px'} display={'flex'} alignItems={'center'} gap={'20px'}>
                <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                    <Box>
                        <Image src={user} width={'40px'} height={'40px'} rounded={'100%'} _hover={{rounded: '0'}}/>
                    </Box>
                    <Box>
                        <Text color={'white'} fontSize={'18px'}>Loiha nomi</Text>
                        <Text color={'#8E8E8E'} fontSize={'9px'}>React js , Chakra ui</Text>
                    </Box>
                </Box>

                <Box>
                    <Text color={'#7ED957'} fontSize={'9px'}>React js , Chakra ui</Text>
                    <Text color={'#8E8E8E'} fontSize={'9px'}>May 4th, 2020</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default LoihaProp