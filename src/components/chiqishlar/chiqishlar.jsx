import { TriangleDownIcon } from '@chakra-ui/icons'
import { Box, Text, Image, Button, useDisclosure, Input, FormLabel, Textarea, useToast } from '@chakra-ui/react'


import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import React from 'react'

const Chiqishlar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const toast = useToast()
    const handleIn = () => {
            toast({
              title: 'Tabriklaymiz',
              description: "Habar muvafaqiyatli jo'natildi",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
            onClose()
    }
    const handleSign = () => {
        toast({
          title: 'Bokor qilindi',
          description: "Habar jonatish bekor qilindi",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        onClose()
}
  return (
    <Box display={'flex'} >

        <Box  mt={'125px'} ml={'1px'}  position={'fixed'} className={'bgColor'} width={'100%'}   >

            
                
            <Box  display={'flex'} pt={'45px'} alignItems={'center'} gap={'200px'} pb={'20px'} >
                <Box pl={'30px'} >
                    <Text  fontSize={'15px'} color={'#8E8E8E'}>chiqishlar</Text>
                </Box>
                <Box>
                    <TriangleDownIcon color={'white'} ref={btnRef}  onClick={onOpen} />

                        <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                                
                            >
                            <DrawerOverlay />
                            <DrawerContent bgColor={'#2B2B3B'}>
                            <DrawerCloseButton color={'white'} />
                                <DrawerHeader color={'white'} fontSize={'20px'}>Habar Jo’natish</DrawerHeader>

                                <DrawerBody display={'flex'} flexDirection={'column'} gap={'20px'}>
                                    <Box>
                                        <Text fontSize={'15px'} color={'white'}>Telefon raqami</Text>
                                        <Input placeholder='tel...' fontSize={'12px'} color={'#808080'} />
                                    </Box>

                                    <Box>
                                        <FormLabel placeholder='habar..' htmlFor='desc' color={'white'} fontSize={'15px'}>Habar</FormLabel>
                                        <Textarea id='mes' placeholder='habar...' fontSize={'12px'} />
                                    </Box>
                                </DrawerBody>


                            <DrawerFooter>
                                <Button variant='outline' bg={'white'} mr={3} mb={'20px'} p={'15px'} fontSize={'15px'} onClick={() => handleSign()}>
                                    Bekor qilish
                                </Button>
                                <Button bg={'#7A69E9'} mb={'20px'} p={'15px'} fontSize={'15px'} colorScheme='blue' onClick={() => handleIn()} >Jo’natish</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Box>

        </Box>
    </Box>
  )
}

export default Chiqishlar