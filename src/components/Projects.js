import React, { useState } from 'react';
import { FaDoorClosed } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { GiWindow } from 'react-icons/gi';

const Projects = () => {
    return (
        <div className="allProducts">
            <section className="products-page" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0" id="projects">
                <div className="container">
                    <div className="row gx-0">
                        <div className="headerRow">
                            <h3 className="productHeader2">PROIZVODI</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="products-section3" data-aos="fade-down">
                <div className="productsImg1"></div>
                <div className="square"></div>
                <div className="container productsContainer">
                    <div className="row gx-0">
                        <div className="col-lg-7 col-sm-6 productsContent">
                            <h2>PVC/ALU <span>mašine</span></h2>
                            <p className="products-para">I am creative, helpful and honest person who likes to get involved in various jobs and activities. Currently I study Javascript technologies like React, Node and other tools like Material UI, Express, to build a great web applications and API's for myself and clients. Always in the mood to grow my knowledge that can help further in my job.</p>
                            <div className="productsIcons">
                                <AiFillSetting className="commonIconsProducts" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products-section3" data-aos="fade-down">
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
            <section className="products-section3" data-aos="fade-down">
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
            <section className="products-section3" data-aos="fade-down">
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
            <section className="products-section3 last-productSection" data-aos="fade-down">
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
        </div>
    )
}

export default Projects
