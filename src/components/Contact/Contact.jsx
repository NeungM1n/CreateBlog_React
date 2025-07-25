import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { DiNodejsSmall } from "react-icons/di";

const Contact = () => {
  return (
    <section id="skill" className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Skills</span>
                <span className='primaryText'>What I Can do</span>
                <span className='secondaryText'>We always love you</span>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <DiNodejsSmall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Launguages</span>
                                    <span className='secondaryText'>css, java</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Detail</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>FrameWorks</span>
                                    <span className='secondaryText'>010-8377-3412</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Detail</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Tools</span>
                                    <span className='secondaryText'>010-8377-3412</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Detail</div>
                        </div>
                    </div>

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Databases</span>
                                    <span className='secondaryText'>010-8377-3412</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Detail</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Cloud/Server</span>
                                    <span className='secondaryText'>010-8377-3412</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Detail</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>etc</span>
                                    <span className='secondaryText'>010-8377-3412</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Detail</div>
                        </div>
                    </div>
                </div>


                
            </div>
        </div>
    </section>
  )
}

export default Contact
