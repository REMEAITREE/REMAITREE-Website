import { Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import st from './pst.module.css';
import { FiUploadCloud } from "react-icons/fi";
import { Box } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,Input } from '@chakra-ui/react'
const Past = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className={st.pstpar}>
            <button onClick={onOpen}>
                <div className={st.box}>
                    <FiUploadCloud size={"10vh"} color={"#6799FF"}></FiUploadCloud>
                    <div className={st.imgheading}>Upload a document</div>
                    <div className={st.supported}>Supported Formats PDF.  <br></br>
                        Size should be less than 5 mb.
                    </div>
                </div>
            </button>
            {/* Modal for upload */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Upload File </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody alignItems={"center"}>
                        <Input type="file" name="file" />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Past
