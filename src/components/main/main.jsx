import { Box } from '@chakra-ui/react'
import React from 'react'
import Chiqish from './chiqish/chiqish'
import Foydalanuchi from './foydalanuvchi/foydalanuvchi'
import Kunlik from './kunlik/kunlik'

const Main = () => {
  return (
    <Box display={'flex'} ml={'223px'} mt={'125px'} position={'fixed'} className={'bgColor'} gap={'50px'}   p={'20px'}>
        <Box>
            <Foydalanuchi />
        </Box>
        <Box>
            <Kunlik />
        </Box>
        <Box>
            <Chiqish />
        </Box>
    </Box>
  )
}

export default Main