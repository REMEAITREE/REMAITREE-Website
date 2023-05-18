import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, Stack, Button, Heading, Box, Text, StackDivider } from '@chakra-ui/react'
import st from './px.module.css';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import medicine from '../db.json';
import { Textarea } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {med} from './tempdata';
import MedCard from './MedCard';
const Px = () => {

  // Timings 
  const [checkedItems, setCheckedItems] = React.useState([false, false])



  // Medicine Names 
  const [medname, setMednm] = useState();
  const [duration, setDuration] = useState();


  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries



  // Prescription box
  let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  const addMsg = async () => {
    try {

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(`http://localhost:3000/chats`, {
        "id": Math.random().toString(36).substring(2, 7),
        "medicine_name": "",
        "duration": 10,
        "mor": true,
        "aft": true,
        "nght": false,
        "quantity": "1/2 spoon"
      }, config);

    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div className={st.parentpx}>
      <Tabs isFitted >
        <TabList className={st.tablist} bg="#31619E" color={"#ffffff"} borderTopLeftRadius="2rem" borderBottomLeftRadius="2rem" borderTopRightRadius="2rem" borderBottomRightRadius="2rem" >
          <Tab _selected={{ bg: "#DBEBFF", color: "#31619E", borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem", transform: "scaleY(1.2)" }}>MEDICINES</Tab>
          <Tab _selected={{ bg: "#DBEBFF", color: "#31619E", borderTopRightRadius: "2rem", borderBottomRightRadius: "2rem", transform: "scaleY(1.2)" }}>PRESCRIPTION</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>

            <hr id={st["hr"]}></hr>
            <div className={st.medicinescard}>
            {med.map(({id,medicine_name,duration,mor,aft,nght,quantity})=>{
              return(
                <>
                <MedCard id={id} name={medicine_name} duration={duration} mor={mor} aft={aft} nght={nght}  quantity={quantity}></MedCard>
                </>
              )
            })}
            </div>
          </TabPanel>
          <TabPanel>
            <Card>
              <hr id={st["hr"]}></hr>
              <CardHeader>
                <Heading size='md' color={"#083c74"}>Patient Report</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='2'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase' >
                      <b>Name - </b> Rajeev Gupta
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      Refered by Dr Sourav Gupta
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Prescription
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      <Textarea
                        value={value}
                        onChange={handleInputChange}
                        rows={14}
                        placeholder='Please write your prescription here '
                        size='sm'
                      />
                    </Text>
                  </Box>
                  {/* <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Analysis
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box> */}
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Px
