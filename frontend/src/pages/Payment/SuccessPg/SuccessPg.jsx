import React from 'react'
import st from './SuccessPg.module.css';
import { Button } from '@chakra-ui/react';
import { useClipboard, Flex, Input } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'
const SuccessPg = () => {
    const placeholder = "http://localhost:3010/conf";
    
    const { onCopy, value, setValue, hasCopied } = useClipboard("http://127.0.0.1:5173/conf");
    
    return (
        <div className={st.bigpar}>
            <div className={st.card}>
                <div className={st.par}>
                    <div className={st.checkmark}>✓</div>
                </div>
                <h1 className={st.h1}>Success</h1>
                <p className={st.tooltip}>We received your purchase request;<br /> we'll be in touch shortly!</p>
                <Card backgroundColor={"#F5F5F5"} mt={"4vh"}>
                    <CardHeader>
                        <Heading size='lg'>Meeting Link </Heading>
                    </CardHeader>
                    <CardBody>
                        <Flex ml={50} mb={2} gap={4}>
                            <Input
                                placeholder={placeholder}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                                mr={4}
                                p={3}
                            />
                            <Button onClick={onCopy} colorScheme='blue'>{hasCopied ? "Copied!" : "Copy"}</Button>
                        </Flex>
                    </CardBody>
                </Card>
            </div>

        </div>
    )
}

export default SuccessPg
