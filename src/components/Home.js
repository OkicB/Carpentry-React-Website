import React from 'react';
import { FaArrowLeft, FaArrowRight, FaDoorClosed } from 'react-icons/fa';
import { GiWindow } from 'react-icons/gi';
import img from '../components/2.jpg';

const Home = () => {
    return (
        <>
            <section className="home-area">
                <div className="containerHome">
                    <div className="row gx-0 rowStyle1">
                        <div className="col-md-3 col-sm-6 box-1">
                            <div className="box-1-section-1">
                                <div className="intro-box">
                                    <div className="row gx-0 pvc-title">
                                        <h1>PVC Stolarija</h1>
                                    </div>
                                    <div className="row gx-0 home-text-section">
                                        <div className="row gx-0">
                                            <h3 className="home-text">MODERN DESIGN</h3>
                                        </div>
                                        <div className="row gx-0">
                                            <h3 className="home-text">MODERN DESIGN</h3>
                                        </div>
                                        <div className="row gx-0">
                                            <h3 className="home-text">MODERN DESIGN</h3>
                                        </div>
                                    </div>
                                    <div className="row gx-0 rowButton">
                                        <button type="button" className="btn btn-outline-primary button1">CONTACT US</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-0 slide-box">
                                <a href="/"><FaArrowLeft /></a>
                                <a className="arrowRight" href="/"><FaArrowRight /></a>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-6 box-2">
                            <div className="row gx-0 row1"></div>
                            <div className="row gx-0">
                                    <div className="col-lg-12 box-5">
                                        <h4 className="bottom-text">54 + WORKS</h4>
                                        <p className="bottom-text para1 p1">Živinice, BiH</p>
                                        <p className="bottom-text para1 p2">061 392 925</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="offer-area">
                <div className="container">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-6">
                            <div className="offerTitle">
                                <h6 className="heading">SERVICES</h6>
                                <h3 className="offerHeader">ŠTA NUDIMO</h3>
                                <p>Feel free to check my services, You will probably find something interesting for Yourself</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container containerHome">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-4 col-md-6 columnServices">
                            <div className="servicesBox">
                                <FaDoorClosed className="commonIcons" />
                                <div className="servicesBoxHeader">PVC MAŠINE</div>
                                <div className="servicesBoxPara">Brand Your business by ordering a professional logo and business card</div>
                            </div>
                        </div>
                            
                        <div className="col-lg-4 col-md-6">
                            <div className="servicesBox">
                                <GiWindow className="commonIcons" />
                                <div className="servicesBoxHeader">PVC STOLARIJA</div>
                                <div className="servicesBoxPara">Brand Your business by ordering a professional logo and business card</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="servicesBox">
                                <FaDoorClosed className="commonIcons" />
                                <div className="servicesBoxHeader">ULAZNA VRATA</div>
                                <div className="servicesBoxPara">Brand Your business by ordering a professional logo and business card</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
