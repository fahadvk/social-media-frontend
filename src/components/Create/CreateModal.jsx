// import { Modal,ModalBody,ModalOverlay,ModalCloseButton,ModalContent,useDisclosure,Button,ModalFooter,ModalHeader } from "@chakra-ui/react"
// import { useEffect } from "react"


// function TransitionExample(props) {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     useEffect(()=>{
//         onOpen()
//     },[])
//     return (
//         <>
//             {/* <Button onClick={onOpen}>Open Modal</Button> */}
//             <Modal
//                 isCentered
//                 onClose={onClose}
//                 isOpen={isOpen}
//                 motionPreset='slideInBottom'
//             >
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Modal Title</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <Lorem count={2} />
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button colorScheme='blue' mr={3} onClick={onClose}>
//                             Close
//                         </Button>
//                         <Button variant='ghost'>Secondary Action</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
// }
// export default TransitionExample