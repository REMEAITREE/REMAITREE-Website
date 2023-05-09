import React, { useEffect, useState } from 'react'
import st from './design.module.css';
import { Avatar, Box, Button, Heading } from '@chakra-ui/react'
import { AiOutlineVideoCamera, AiFillTool, AiFillBell,AiTwotoneFileText } from "react-icons/ai";
import { FaFileMedicalAlt, FaFilePrescription } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { Badge } from '@chakra-ui/react'
import Chatbox from './Chatbox/Chatbox';
import { chats } from '../data';
import { BsFillSendFill, BsRobot, BsFillChatDotsFill, BsServer } from "react-icons/bs";
import VideoRoom from '../Videocall/Room/VideoRoom';
import Aibox from './AIbox/Aibox';
import Px from './Px/Px';
import Past from './PastMedical/Past';
const Design = () => {
    const [hover, setHover] = useState(4);
    const changemode = (i) => {
        setHover(i);
    }
    const [joined, setJoined] = useState(false);
    return (
        <>
            <div className={st.main}>
                <div className={st.parent} >

                    <div className={st.videobox}>
                        <div className={st.leftheading}>
                            <div className={st.AiOutline}><h1><AiOutlineVideoCamera size="20px"></AiOutlineVideoCamera></h1></div>
                            {/* <Heading as='h2' size='xl' fontWeight={"bold"}>
                                Video call meeting with Dr Raj
                            </Heading> */}
                            <div className={st.videocallwith}>Video call meeting with Dr Raj</div>
                            
                            <GoVerified size="40px" color='green'></GoVerified>
                            <br></br>
                            <br></br>
                        </div>
                        <div className={st.videocomp}>

                            {!joined && (
                                // <button className={st.joinroom} onClick={() => setJoined(true)}>
                                //     Join Room
                                // </button>
                                <button class={st.joinroom} onClick={() => setJoined(true)}>

                                    <BsServer></BsServer>
                                    <div class={st.button_with_icon__label}>Join Room </div>
                                </button>
                            )}

                            {joined && <VideoRoom />}

                        </div>
                    </div>
                    { 
                        hover===1 && 
                        <div className={st.aibox}>
                              <Px></Px>  
                        </div>
                    }
                    { 
                        hover===3 && 
                        <div>
                              <Past></Past>  
                        </div>
                    }
                    {/* Chat Box  */}
                    {hover === 4 &&
                        <div className={st.chatbox}>
                            <div className={st.child}>
                                <div className={st.chathd}>
                                    <Heading as='h2' fontSize='3vh' fontWeight={"bold"} display="flex" alignItems="center" justifyContent="center" color="white">
                                        Messages
                                    </Heading>
                                    <div><AiFillBell color='white' size="4vh"></AiFillBell></div>
                                </div>
                                <br></br>
                                <br></br>

                                {chats.map(({ chatid, name, msg, sender_dr }) => {
                                    return (
                                        <>
                                            <Chatbox key={chatid} id={chatid} name={name} msg={msg} sender_dr={sender_dr}></Chatbox>
                                        </>
                                    )
                                })}
                                <Box className={st.entermsg}>
                                    <div className={st.enter}>Enter a Message ..... </div>
                                    <button className={st.msgicon}><BsFillSendFill></BsFillSendFill></button>
                                </Box>

                            </div>
                        </div>
                    }

                    {/* AI Tab */}
                    { 
                        hover===2 && 
                        <div className={st.aibox}>
                              <Aibox></Aibox>  
                        </div>
                    }
                    {/* Right Navbar code */}
                    <div className={st.navbar}>
                        <div className={st.navicon}><AiFillTool size="35px"></AiFillTool></div>
                        <div className={st.navparent}>
                            {hover === 1 ?
                                <div className={st.hoverborder_1t} onClick={() => changemode(1)}> <item className={st.item} id={st["i_1"]}><AiTwotoneFileText></AiTwotoneFileText></item></div> :
                                <div className={st.hoverborder_1} onClick={() => changemode(1)}> <item className={st.item} id={st["i_1"]}><AiTwotoneFileText></AiTwotoneFileText></item></div>
                            }
                            {hover === 2 ?
                                <div className={st.hoverborder_2t} onClick={() => changemode(2)}> <item className={st.item} id={st["i_2"]}><BsRobot></BsRobot></item></div>
                                :
                                <div className={st.hoverborder_2} onClick={() => changemode(2)}> <item className={st.item} id={st["i_2"]}><BsRobot></BsRobot></item></div>
                            }

                            {hover === 3 ?

                                <div className={st.hoverborder_3t} onClick={() => changemode(3)}> <item className={st.item} id={st["i_3"]}><FaFileMedicalAlt></FaFileMedicalAlt></item></div>
                                :
                                <div className={st.hoverborder_3} onClick={() => changemode(3)}> <item className={st.item} id={st["i_3"]}><FaFileMedicalAlt></FaFileMedicalAlt></item></div>
                            }


                            {hover === 4 ?
                                <div className={st.hoverborder_4t} onClick={() => changemode(4)}> <item className={st.item} id={st["i_4"]}><BsFillChatDotsFill></BsFillChatDotsFill></item></div>
                                :
                                <div className={st.hoverborder_4} onClick={() => changemode(4)}> <item className={st.item} id={st["i_4"]}><BsFillChatDotsFill></BsFillChatDotsFill></item></div>
                            }

                        </div>
                        <div className={st.Avatar}>
                            <Avatar
                                size='lg'
                                name='Prosper Otemuyiwa'
                                src='https://bit.ly/prosper-baba'
                            />{' '}
                        </div>

                    </div>




                </div>
            </div>
        </>
    )
}

export default Design
