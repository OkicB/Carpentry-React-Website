import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaDoorClosed } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';
import { GiWindow } from 'react-icons/gi';
import img1 from '../components/kompresori1.jpg';
/*import img2 from '../components/kompresori2.jpg';
import img3 from '../components/kompresori3.jpg';
import img4 from '../components/kompresori4.jpg';
import img5 from '../components/kompresori5.jpg';
import img6 from '../components/mašine.jpg';
import img7 from '../components/mašine1.jpg';
import img8 from '../components/mašine2.jpg';
import img9 from '../components/mašine3.jpg';
import img10 from '../components/mašine4.jpg';
import img11 from '../components/mašine5.jpg';
import img12 from '../components/mašine6.jpg';
import img13 from '../components/mašine7.jpg';
import img14 from '../components/mašine8.jpg';
import img15 from '../components/mašine9.jpg';
import img16 from '../components/prozori1.jpg';
import img17 from '../components/prozori2.jpg';
import img18 from '../components/prozori3.jpg';
import img19 from '../components/prozori4.jpg';
import img20 from '../components/prozori5.jpg';
import img21 from '../components/prozori6.jpg';
import img22 from '../components/sobna1.jpg';
import img23 from '../components/sobna2.jpg';
import img24 from '../components/sobna3.jpg';
import img25 from '../components/sobna4.jpg';
import img26 from '../components/sobna5.jpg';
import img27 from '../components/sobna6.jpg';
import img28 from '../components/sobna7.jpg';
import img29 from '../components/sobna8.jpg';
import img30 from '../components/sobna9.jpg';
import img31 from '../components/sobna10.jpg';
import img32 from '../components/sobna11.jpg';
import img33 from '../components/sobna12.jpg';
import img34 from '../components/sobna13.jpg';
import img35 from '../components/sobna14.jpg';
import img36 from '../components/ulazna_vrata.jpg';
import img37 from '../components/ulazna_vrata2.jpg';
import img38 from '../components/ulazna1.jpg';
import img39 from '../components/ulazna2.jpg';
import img40 from '../components/ulazna3.jpg';
import img41 from '../components/ulazna4.jpg';
<div className="row gx-0">
                        <div className="col-sm-12">
                            <ul className="productsList">
                                <li className="productItem">SVE</li>
                                <li className="productItem">PVC/ALU mašine</li>
                                <li className="productItem">Stolarija</li>
                                <li className="productItem">Vrata</li>
                                <li className="productItem">Kompresori</li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <div className="row gx-0">
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img1} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
*/

const Projects = () => {
    return (
        <>
            <section className="products-page" id="projects">
                <div className="container">
                    <div className="row gx-0">
                        <div className="headerRow">
                            <h3 className="productHeader">PROIZVODI</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="products-section3">
                <div className="productsImg1"></div>
                <div className="square"></div>
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-7 productsContent">
                            <h2>PVC/ALU <span>mašine</span></h2>
                            <p className="products-para">I am creative, helpful and honest person who likes to get involved in various jobs and activities. Currently I study Javascript technologies like React, Node and other tools like Material UI, Express, to build a great web applications and API's for myself and clients. Always in the mood to grow my knowledge that can help further in my job.</p>
                            <div className="productsIcons">
                                <AiFillSetting className="commonIconsProducts" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products-section3">
                <div className="productsImg2"></div>
                <div className="square"></div>
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-7 productsContent">
                            <h2><span>Stolarija</span></h2>
                            <p className="products-para">I am creative, helpful and honest person who likes to get involved in various jobs and activities. Currently I study Javascript technologies like React, Node and other tools like Material UI, Express, to build a great web applications and API's for myself and clients. Always in the mood to grow my knowledge that can help further in my job.</p>
                            <div className="productsIcons">
                                <GiWindow className="commonIconsProducts" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products-section3">
                <div className="productsImg3"></div>
                <div className="square"></div>
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-7 productsContent">
                            <h2>Ulazna<span>vrata</span></h2>
                            <p className="products-para">I am creative, helpful and honest person who likes to get involved in various jobs and activities. Currently I study Javascript technologies like React, Node and other tools like Material UI, Express, to build a great web applications and API's for myself and clients. Always in the mood to grow my knowledge that can help further in my job.</p>
                            <div className="productsIcons">
                                <FaDoorClosed className="commonIconsProducts" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products-section3">
                <div className="productsImg4"></div>
                <div className="square"></div>
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-7 productsContent">
                            <h2>Sobna<span>vrata</span></h2>
                            <p className="products-para">I am creative, helpful and honest person who likes to get involved in various jobs and activities. Currently I study Javascript technologies like React, Node and other tools like Material UI, Express, to build a great web applications and API's for myself and clients. Always in the mood to grow my knowledge that can help further in my job.</p>
                            <div className="productsIcons">
                                <FaDoorClosed className="commonIconsProducts" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products-section3">
                <div className="productsImg5"></div>
                <div className="square"></div>
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-7 productsContent">
                            <h2><span>Kompresori</span></h2>
                            <p className="products-para">I am creative, helpful and honest person who likes to get involved in various jobs and activities. Currently I study Javascript technologies like React, Node and other tools like Material UI, Express, to build a great web applications and API's for myself and clients. Always in the mood to grow my knowledge that can help further in my job.</p>
                            <div className="productsIcons">
                                <AiFillSetting className="commonIconsProducts" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
