import { Box , Image, Text} from '@chakra-ui/react'
import { user } from '../assets'
import React from 'react'

const ChiqishlarProp = () => {
  return (
    <Box>

        <Box mt={'40px'} bgColor={'#3B3B3B'} borderWidth={'0.1px'} borderColor={'gray'} rounded={'10px'} p={'20px'} display={'flex'}    alignItems={'center'} gap={'30px'}>
                <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                    <Box>
                        <Image src={user} width={'60px'} height={'60px'} rounded={'100%'}/>
                    </Box>
                    <Box>
                        <Text color={'white'} fontSize={'30px'}>Loiha nomi</Text>
                        <Text color={'#8E8E8E'} fontSize={'18px'}>React js , Chakra ui</Text>
                    </Box>
                </Box>

                <Box>
                    <Text color={'#7ED957'}>React js , Chakra ui</Text>
                    <Text color={'#8E8E8E'}>May 4th, 2020</Text>
                </Box>
        </Box>
    </Box>
  )
}

export default ChiqishlarProp