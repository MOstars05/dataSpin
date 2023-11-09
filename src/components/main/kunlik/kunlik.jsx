import { Box , Text, Button, FormControl, FormLabel, Input, useDisclosure, useToast} from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
  } from '@chakra-ui/react'

const Kunlik = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const toast = useToast()
    const handleIn = () => {
            toast({
              title: 'Tabriklaymiz',
              description: "Hodim muvafaqiyatli qoshildi",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
            onClose()
    }
    const handleSign = () => {
        toast({
          title: 'Bokor qilindi',
          description: "Hodim qo'shish bekor qilindi",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        onClose()
}
  return (
    <Box>
         <Box display={'flex'} flexDirection={'column'} gap={'25px'}>
            <Box pt={'30px'} pl={'90px'}>
                <Text fontSize={'15px'} color={'#8E8E8E'}>Kunlik Qo’shilish</Text>
                <Text color={'white'} fontSize={'40px'}>12</Text>   
            </Box>
            <Box pl={'90px'}>
                
                <Button onClick={onOpen} bgColor={'#8C52FF'} _hover={{bgColor: '#FFD700'}} color={'white'} fontSize={'15px'} p={'20px'} pl={'20px'} pr={'20px'}>Loiha qo’shish</Button>

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
                            <FormLabel fontSize={'20px'}>Rasmi</FormLabel>
                            <Input ref={initialRef} placeholder='Rasmi...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Ismi</FormLabel>
                            <Input placeholder='Ismi...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Falimiliya</FormLabel>
                            <Input placeholder='Falimiliya...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Email</FormLabel>
                            <Input placeholder='Email...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Telefon raqam</FormLabel>
                            <Input placeholder='Telefon raqam...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Yonalishi</FormLabel>
                            <Input placeholder='Yonalishi...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Daraja</FormLabel>
                            <Input placeholder='Daraja...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Telegram</FormLabel>
                            <Input placeholder='Telegram...' fontSize={'12px'} />
                        </FormControl>
                        
                        </ModalBody>

                        

                        <ModalFooter>
                            <Button onClick={() => handleSign()} colorScheme='blue' bgColor={'white'} color={'black'} mr={3} p={'15px'} fontSize={'15px'}>
                            Bekor qilish
                            </Button>
                            <Button onClick={() => handleIn()} colorScheme='teal' bgColor={'#7A69E9'} p={'15px'} fontSize={'15px'} color={'white'}>Saqlash</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>

        
    </Box>
  )
}

export default Kunlik