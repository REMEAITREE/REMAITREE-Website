import React, { useEffect, useState } from 'react'
import st from './Payment.module.css'
import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
const Payment = () => {
    const [running, setRunning] = useState(true);
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(4);
    const [odig, setOdig] = useState(9);
    const [tdig, setTdig] = useState(5);
    const [hdig, setH] = useState(4);
    const [thdig, setTh] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(interval);
                return;
            }

            if (seconds === 0) {
                setMinutes((prevMinutes) => prevMinutes - 1);
                setH(minutes % 10);
                setSeconds(59);
            } else {
                setSeconds((prevSeconds) => prevSeconds - 1);
                setOdig(seconds % 10);
                let s = seconds;
                s = Math.floor(s / 10);
                setTdig(s % 10);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds]);
    const formatTimeDigit = (digit) => {
        return digit.toString().padStart(2, '0');
    };
    return (
        <>
            <div className={st.parent}>
                <div className={st.title}>
                    <div className={st.heading}>RemeAitree     </div>
        
                    <div className={st.ssubtext}>Payment Gateway</div>
                </div>
                <br></br>
                <div className={st.timer}>
                    <div className={st.digits}>{thdig}</div>
                    <div className={st.digits}>{hdig}</div>
                    <div> : </div>
                    <div className={st.digits}>{tdig}</div>
                    <div className={st.digits}>{odig}</div>
                </div>
                <br></br>
                <Box boxSize='sm'>
                    <div className={st.qr}></div>
                    <div className={st.footer}></div>

                </Box>
            </div>
        </>
    )
}

export default Payment
