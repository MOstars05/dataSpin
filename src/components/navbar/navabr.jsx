import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Box display={'flex'} position={'fixed'} className={'bgColor'} height={'100%'}>
        <Box ml={'20px'} mt={'30px'}>
            <Box>
                <Link><Text color={'#8C52FF'} fontSize={'22px'} fontWeight={'bold'}>DATASPIN</Text></Link>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={'8px'} mt={'35px'}>
                <Text color={'#8E8E8E'} fontSize={'12px'}>Menu</Text>
                <Box height={'1px'} width={'200px'} bgColor={'#3B3B3B'}></Box>
            </Box>

            <Box pt={'30px'} display={'flex'} flexDirection={'column'} gap={'20px'} fontSize={'15px'} fontWeight={'bold'}> 
                <Text color={'#8C52FF'}>Boshqaruv paneli</Text>
                <Text color={'white'}>Portfolio</Text>
                <Text color={'white'}>Xodimlar</Text>
                <Text color={'white'}>Notification</Text>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={'8px'} pt={'60px'}>
                <Text color={'#8E8E8E'} fontSize={'12px'}>Qo’shimcha m’lumot</Text>
                <Box height={'1px'} width={'200px'} bgColor={'#3B3B3B'}></Box>
            </Box>

            <Box pt={'30px'} display={'flex'} flexDirection={'column'} gap={'18px'} fontSize={'15px'} fontWeight={'bold'}> 
                <Text color={'white'}>Mening profilim</Text>
                <Text color={'white'}>Sozlamalar</Text>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={'8px'} pt={'50px'}>
                <Text color={'#8E8E8E'} fontSize={'12px'}>Admin</Text>
                <Box height={'1px'} width={'200px'} bgColor={'#3B3B3B'}></Box>
            </Box>

            <Box pt={'30px'} display={'flex'} flexDirection={'column'} gap={'18px'} fontSize={'15px'} fontWeight={'bold'}> 
                <Text color={'white'}>Admin</Text>
            </Box>

            

        </Box>

        <Box>
        <Box height={'100%'} width={'1px'} bgColor={'#3B3B3B'}></Box>
        </Box>


    </Box>
  )
}

export default Navbar