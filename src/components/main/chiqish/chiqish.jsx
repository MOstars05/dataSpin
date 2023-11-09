import { Box , Text, Button, FormControl, FormLabel, Input, useDisclosure, useToast} from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
  } from '@chakra-ui/react'

const Chiqish = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const toast = useToast()
    const handleIn = () => {
            toast({
              title: 'Tabriklaymiz',
              description: "Loiha muvafaqiyatli qo'shildi",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
            onClose()
    }
    const handleSign = () => {
        toast({
          title: 'Bokor qilindi',
          description: "RLoiha qo'shish bekor qilindi",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        onClose()
}
  return (
    <Box>
         <Box display={'flex'} flexDirection={'column'} gap={'25px'} pl={'50px'}>
            <Box pt={'30px'} pl={'90px'}>
                <Text fontSize={'15px'} color={'#8E8E8E'}>chiqishlar</Text>
                <Text color={'white'} fontSize={'40px'}>0</Text>   
            </Box>
            <Box pl={'50px'}>
                
                <Button 
                 onClick={onOpen} bgColor={'#975BCE'} _hover={{bgColor: '#FA8072'}}  color={'white'} fontSize={'15px'} p={'20px'} pl={'20px'} pr={'20px'}>Loiha qo’shish</Button>

                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                <ModalOverlay />
                <ModalContent bgColor={'#2B2B3B'} color={'white'}>
                    <ModalHeader fontSize={'20px'}>Hodim Qo’shish</ModalHeader>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel fontSize={'15px'}>Rasmi</FormLabel>
                            <Input ref={initialRef} placeholder='Rasmi...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Nomi</FormLabel>
                            <Input placeholder='Nomi...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Malumot</FormLabel>
                            <Input placeholder='Malumot...' fontSize={'12px'} />
                        </FormControl>    
                        </ModalBody>

                    
                        <ModalFooter>
                            <Button onClick={() => handleIn()} colorScheme='blue' bgColor={'white'} color={'black'} mr={3} p={'15px'} fontSize={'15px'}>
                            Saqlash
                            </Button>
                            <Button onClick={() => handleSign()} colorScheme='teal' bgColor={'#7A69E9'} p={'15px'} fontSize={'15px'} color={'white'}>Bekor qilish</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>

        
    </Box>
  )
}

export default Chiqish