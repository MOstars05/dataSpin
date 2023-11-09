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

const Kirish = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const toast = useToast()
    const handleIn = () => {
            toast({
              title: 'Tabriklaymiz',
              description: "Siz muvafaqiyatli akauntingizga kirdingiz",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
            onClose()
    }
    const handleSign = () => {
        toast({
          title: 'Bokor qilindi',
          description: "Akauntga kirish bekor qilindi",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        onClose()
}
  return (
    <Box>
        <Box pt={'30px'}>
            <Button onClick={onOpen} bgColor={'#7A69E9'} color={'white'} fontSize={'15px'} p={'20px'} _hover={{bgColor: '#9ACD32'}} >Kirish</Button>

            <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                <ModalOverlay />
                <ModalContent bgColor={'#2B2B3B'} color={'white'}>
                    <ModalHeader fontSize={'20px'}>Kirish</ModalHeader>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel fontSize={'15px'}>Email</FormLabel>
                            <Input placeholder='email...' fontSize={'13px'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontSize={'15px'}>Password</FormLabel>
                            <Input placeholder='password...' fontSize={'13px'} />
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
  )
}

export default Kirish