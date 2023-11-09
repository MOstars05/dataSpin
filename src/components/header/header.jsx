import { Box, Input, Text } from "@chakra-ui/react"
import Kirish from "./kirish/kirish"
import RoyhatdanOtish from "./royhatdanOtish/royhatdanOtish"




const Header = () => {
    
  return (
    <Box ml={'221px'} display={'flex'} flexDirection={'column'} position={'fixed'} width={'100%'}>
        <Box display={'flex'}  gap={'380px'} className={'bgColor'} pb={'54px'} >

            <Box pt={'30px'} ml={'60px'} >
                <Text color={'white'} fontSize={'22px'} fontWeight={'bold'}>Boshqaruv paneli</Text>
            </Box>
           

            <Box display={'flex'} gap={'20px'} pr={'40px'} >
                <Box pt={'30px'}>
                    <Input pl={'40px'} pr={'40px'}  rounded={'40px'} fontSize={'12px'} border={'none'} bgColor={'#3B3B3B'} placeholder={'Qidirish..'} color={'white'}   _placeholder={{ color: 'white' }} ></Input>
                </Box>

                <Box>
                    <RoyhatdanOtish />
                </Box>

                <Box>
                    <Kirish />
                </Box>

                
            </Box>
            
        </Box>

        <Box>
            <Box height={'1px'} width={'1420px'} bgColor={'#3B3B3B'}></Box>
        </Box>
    </Box>
  )
}

export default Header