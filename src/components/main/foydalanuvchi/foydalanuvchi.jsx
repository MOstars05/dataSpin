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

const Foydalanuchi = () => {
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
          description: "Loiha qo'shish bekor qilindi",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        onClose()
}

  return (
    <Box>
        <Box display={'flex'} flexDirection={'column'} gap={'25px'} >
            <Box pt={'30px'} pl={'50px'}>
                <Text fontSize={'15px'} color={'#8E8E8E'}>Foidalanuvchilar</Text>
                <Text color={'white'} fontSize={'40px'}>100</Text>   
            </Box>
            <Box pl={'50px'}>
                
                <Button onClick={onOpen} bgColor={'#7A69E9'} color={'white'} _hover={{bgColor: '#40E0D0'}} fontSize={'15px'} p={'20px'} pl={'20px'} pr={'20px'}>Loiha qo’shish</Button>

                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                <ModalOverlay />
                <ModalContent bgColor={'#2B2B3B'} color={'white'}>
                    <ModalHeader fontSize={'20px'}>Loiha Qo’shish</ModalHeader>
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
                            <FormLabel fontSize={'12px'}>Malumot</FormLabel>
                            <Input placeholder='Malumot...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'12px'}>Narxi</FormLabel>
                            <Input placeholder='Narxi...' fontSize={'12px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Havola</FormLabel>
                            <Input placeholder='Havola...' fontSize={'12px'} />
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

export default Foydalanuchi