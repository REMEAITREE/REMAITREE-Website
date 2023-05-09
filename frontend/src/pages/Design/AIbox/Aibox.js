import { Button } from '@chakra-ui/react';
import React from 'react'
import st from './Aibox.module.css';
import { Text } from '@chakra-ui/react'
const Aibox = () => {
    return (
        <div className={st.parent}>

            <div className={st.top}>
                <heading className={st.heading}>Arti-Care Prediction </heading>
                <div className={st.cover}>
                    <img src={require("../Images/aicover.jpg")}></img>
                </div>
            </div>
            <div className={st.bottom}>
                <br></br>
                <br></br>
                <heading className={st.heading2}>AI Recommendation  </heading>
                <div className={st.recommend}>
                    <br></br>
                    <br></br>
                    <Text fontSize='xl' align="center"><b>Predicted Disease : </b>Common Cold </Text>
                    <br></br>


                </div>
                <div className={st.advise}>
                <heading className={st.heading3} >Advise</heading>
                    <Text fontSize='md' color="white" className={st.txt}>

                       <h3>- Stay hydrated: Drink plenty of fluids </h3>
                        
                        <h3>- Gargle with saltwater:</h3>
                        
                 </Text>
                </div>
                <br></br>
                <br></br>
                 <Button colorScheme='linkedin' w="100%" h="6vh"> Book Medicines</Button>
            </div>
        </div>
    )
}

export default Aibox
