import { Button } from '@chakra-ui/react'
import React from 'react'
import './pst.css'
import { GrAttachment } from "react-icons/gr";
const Past = () => {
    return (
        <div className="pstpar">
            <heading className="heading">Past Medical Reports </heading>

            <button   className="btn">
               <div><GrAttachment> </GrAttachment> </div>  Upload Past Medical Records
            </button>
        </div>
    )
}

export default Past
