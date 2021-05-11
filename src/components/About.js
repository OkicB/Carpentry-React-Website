import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img from '../components/2.jpg';

const About = () => {
    return (
        <>
            <section className="about-area">
                <div className="container containerHome">
                    <div className="row gx-0">
                        <div className="col-lg-6 colAbout">
                            <div data-aos="fade-right" className="aboutTitle">
                                <h6>these are some of my skills</h6>
                                <h1>Let's work <br /><span>together</span></h1>
                                <div className="aboutText">
                                    <h3>THESE ARE SOME OF MY SKILLS</h3>
                                    <p>I am creative, helpful and honest person who likes to get involved in various jobs and activities. Currently I study Javascript technologies like React, Node and other tools like Material UI, Express, to build a great web applications and API's for myself and clients. Always in the mood to grow my knowledge that can help further in my job.</p>
                                </div>
                                <div>
                                    <a className="btnAbout" href="/">Hire me now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 colAbout">
                            <div data-aos="fade-right" className="aboutImage">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
