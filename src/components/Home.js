import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaArrowLeft, FaArrowRight, FaDoorClosed } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';
import { GiWindow } from 'react-icons/gi';
import img from '../components/aboutImg.jpg';
import Carousel from "react-elastic-carousel";
import Modal from 'react-modal';
import imgLogo from '../components/logo.png';

import img1 from '../components/mašine.jpg';
import img2 from '../components/proizvodi.jpg';
import img3 from '../components/ulazna_vrata.jpg';
import img4 from '../components/ulazna_vrata2.jpg';
import img5 from '../components/rico_plast.jpg';

import img6 from '../components/sawin.png';
import img7 from '../components/stokprom.jpg';
import img8 from '../components/wintech2.png';
import img9 from '../components/europen.png';
import img10 from '../components/dalgakiran.png';

import imgMasine from '../components/mašine1.jpg';
import imgMasine2 from '../components/mašine2.jpg';
import imgMasine3 from '../components/mašine3.jpg';
import imgMasine4 from '../components/mašine4.jpg';
import imgMasine5 from '../components/mašine6.jpg';
import imgMasine6 from '../components/mašine7.jpg';

import imgStolarija1 from '../components/roba1.jpg';
import imgStolarija2 from '../components/roba2.jpg';
import imgStolarija3 from '../components/sobna10.jpg';
import imgStolarija4 from '../components/sobna11.jpg';
import imgStolarija5 from '../components/sobna12.jpg';
import imgStolarija6 from '../components/sobna13.jpg';

import imgSobna1 from '../components/sobna2.jpg';
import imgSobna2 from '../components/sobna3.jpg';
import imgSobna3 from '../components/sobna5.jpg';
import imgSobna4 from '../components/sobna9.jpg';
import imgSobna5 from '../components/sobna10.jpg';
import imgSobna6 from '../components/sobna13.jpg';

import imgUlazna1 from '../components/ulazna1.jpg';
import imgUlazna2 from '../components/ulazna2.jpg';
import imgUlazna3 from '../components/ulazna3.jpg';
import imgUlazna4 from '../components/ulazna4.jpg';
import imgUlazna5 from '../components/ulazna_vrata.jpg';
import imgUlazna6 from '../components/ulazna_vrata2.jpg';

import imgKompresori1 from '../components/kompresori1.jpg';
import imgKompresori2 from '../components/kompresori3.jpg';
import imgKompresori3 from '../components/kompresori4.jpg';
import imgKompresori4 from '../components/kompresori5.jpg';
import imgKompresori5 from '../components/kompresori2.jpg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [modalIsOpen4, setModalIsOpen4] = useState(false);
    const [modalIsOpen5, setModalIsOpen5] = useState(false);
    const handleClose = () => setModalIsOpen(false);
    const handleClose2 = () => setModalIsOpen2(false);
    const handleClose3 = () => setModalIsOpen3(false);
    const handleClose4 = () => setModalIsOpen4(false);
    const handleClose5 = () => setModalIsOpen5(false);
    return (
        <>
            <section data-aos="fade-right" className="home-area" id="home">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-md-5 col-sm-6">
                            <div className="border">
                            <div className="home-content">
                                <p className="ricoP">RICO PLAST</p>
                                <h2>Kvalitet PVC <span className="carpentry-class">Stolarije</span></h2>
                                <div className="home-button-field">
                                    <a className="btn button2" href="#about-section">Saznajte više</a>
                                    <a className="custom-link" href="#offer-section">Uvijek smo tu za Vaše Potrebe<HiArrowNarrowRight className="arrowRight" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            <section className="about-area" id="about-section">
                <div className="container containerHome">
                    <div className="row gx-0">
                        <div className="col-lg-6 colAbout">
                            <div data-aos="fade-right" className="aboutTitle">
                                <h6>DOBRODOŠLI</h6>
                                <h1>Saznajte više <br /><span>o nama</span></h1>
                                <div className="aboutText">
                                    <h3>PO ČEMU SMO JEDINSTVENI</h3>
                                    <p>Rico-plast, Živinice na prostorima BiH posluje već 20 godina, tijekom kojih se razvio u sistemu prodaje mašina za proizvodnju PVC i ALU mašina značajnim iskustvom u savjetovanju, razvoju i uvođenju. Fokusirani smo na razvoj dugoročne stolarije i održivih mašina. Pružamo kvalitetne proizvode uvežene iz Njemačke, Turske i drugih država.</p>
                                </div>
                                <div>
                                    <a className="btnAbout" href="mailto: rico-plast@gmail.com">Naručite proizvod</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 colAbout">
                            <div data-aos="fade-up" className="aboutImage">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offer-area" id="offer-section">
                <div data-aos="fade-down" className="container">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-6">
                            <div className="offerTitle">
                                <h6 className="heading">Usudite se sanjati o modernom domu.</h6>
                                <h3 className="offerHeader">ŠTA NUDIMO</h3>
                                <p>Drugi o tome pričaju, a mi to radimo. Već 20 godina.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="container containerHome">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-4 col-md-6 columnServices">
                            <div className="servicesBox" onClick={() => setModalIsOpen(true)}>
                                <AiFillSetting className="commonIcons" />
                                <div className="servicesBoxHeader">PVC/ALU MAŠINE CNC</div>
                                <div className="servicesBoxPara">U našoj punudi možete pronaći jednoglavne i dvoglavne mašine.</div>
                            </div>
                            <Modal isOpen={modalIsOpen}>
                                <button className="modalButton" onClick={handleClose}>X</button>
                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgMasine}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgMasine2}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgMasine3}/></div>
                                </div>

                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgMasine4}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgMasine5}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgMasine6}/></div>
                                </div>
                            </Modal>
                        </div>
                            
                        <div className="col-lg-4 col-md-6">
                            <div className="servicesBox" onClick={() => setModalIsOpen2(true)}>
                                <GiWindow className="commonIcons" />
                                <div className="servicesBoxHeader">PVC STOLARIJA</div>
                                <div className="servicesBoxPara">Stolarija nezaboravne kvalitete i složene strukture.</div>
                            </div>
                            <Modal isOpen={modalIsOpen2}>
                                <button className="modalButton" onClick={handleClose2}>X</button>
                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgStolarija1}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgStolarija2}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgStolarija3}/></div>
                                </div>

                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgStolarija4}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgStolarija5}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgStolarija6}/></div>
                                </div>
                            </Modal>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="servicesBox" onClick={() => setModalIsOpen3(true)}>
                                <FaDoorClosed className="commonIcons" />
                                <div className="servicesBoxHeader">ULAZNA VRATA</div>
                                <div className="servicesBoxPara">Jungmeister ulazna vrata sa modelima za svačiji ukus.</div>
                            </div>
                            <Modal isOpen={modalIsOpen3}>
                                <button className="modalButton" onClick={handleClose3}>X</button>
                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgUlazna1}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgUlazna2}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgUlazna3}/></div>
                                </div>

                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgUlazna4}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgUlazna5}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgUlazna6}/></div>
                                </div>
                            </Modal>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="servicesBox" onClick={() => setModalIsOpen4(true)}>
                                <FaDoorClosed className="commonIcons" />
                                <div className="servicesBoxHeader">SOBNA VRATA</div>
                                <div className="servicesBoxPara">Vrata sa kreativnim dizajnom po svjetskim trendovima.</div>
                            </div>
                            <Modal isOpen={modalIsOpen4}>
                                <button className="modalButton" onClick={handleClose4}>X</button>
                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgSobna1}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgSobna2}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgSobna3}/></div>
                                </div>

                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgSobna4}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgSobna5}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgSobna6}/></div>
                                </div>
                            </Modal>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="servicesBox" onClick={() => setModalIsOpen5(true)}>
                                <AiFillSetting className="commonIcons " />
                                <div className="servicesBoxHeader">KOMPRESORI</div>
                                <div className="servicesBoxPara">Dizajnirani da bez problema služe kupcima dugo godina.</div>
                            </div>
                            <Modal isOpen={modalIsOpen5}>
                                <button className="modalButton" onClick={handleClose5}>X</button>
                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgKompresori1}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgKompresori2}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgKompresori3}/></div>
                                </div>

                                <div className="row gx-0 justifyCenter">
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgKompresori4}/></div>
                                    <div className="col-lg-3 col-md-6 columnModal"><img className="imgModal" src={imgKompresori5}/></div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products-area">
                <div className="container">
                    <div className="row gx-0 justifyCenter">
                        <div className="line"></div>
                    </div>
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-6" data-aos="fade-down-right">
                            <div className="offerTitle">
                                <h6 className="heading">KOMPLETIRANO</h6>
                                <h3 className="productHeader">Naši proizvodi</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" data-aos="fade-right">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-12 col-md-6 columnServices">
                            <div className="productBox">
                                <div className="App">
                                    <Carousel breakPoints={breakPoints}>
                                        <img className="items item1" src={img1}></img>
                                        <img className="items" src={img2}></img>
                                        <img className="items" src={img3}></img>
                                        <img className="items item4" src={img4}></img>
                                        <img className="items" src={img5}></img>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="clients-area">
                <div className="container">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-6" data-aos="flip-down">
                            <div className="offerTitle">
                                <h6 className="heading">NAŠI KLIJENTI</h6>
                                <h3 className="productHeader">Kompanije s kojima radimo</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 justifyCenter clientsRow" data-aos="fade-up">
                                <div className="col-lg-3 col-md-6 columnClients">
                                    <div className="clientsBox">
                                        <a href="#">
                                            <img className="items1 itemSawin" src={img6}/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 columnClients">
                                    <div className="clientsBox">
                                        <a href="#">
                                            <img className="items1" src={img7}/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 columnClients">
                                    <div className="clientsBox">
                                        <a href="#">
                                            <img className="items1 itemWintech" src={img8}/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 columnClients">
                                    <div className="clientsBox">
                                        <a href="#">
                                            <img className="items1" src={img9}/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 columnClients">
                                    <div className="clientsBox">
                                        <a href="#">
                                            <img className="items1" src={img10}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>

            <section className="form-area">
                <div className="container">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="offerTitle">
                                <h6 className="heading">POSJETITE NAS</h6>
                                <h3 className="productHeader">Kontaktirajte za više informacija</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-6 col-md-6" data-aos="fade-up">
                            <form className="form">
                                        <div className="col-md-6 col-sm-6 colInput">
                                            <input type="text" placeholder="Unesite Ime i Prezime" name="name" className="contactForm" required="true" />
                                        </div>
                                        <div className="col-md-6 col-sm-6 colInput">
                                            <input type="email" placeholder="Unesite Email" name="email" className="contactForm" required="true" />
                                        </div>
                                        <div className="col-md-6 col-sm-6 colInput">
                                            <input type="text" placeholder="Upišite Poruku" name="message" className="contactForm" required="true" />
                                        </div>
                                        <div>
                                            <a className="btnAbout" href="mailto: rico-plast@gmail.com">Pošalji</a>
                                        </div>                              
                            </form>
                        </div>
                        <div className="col-lg-5 col-md-6 map" data-aos="fade-up">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11394.80386282076!2d18.6578459!3d44.4392959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb181ab963ba7d457!2sRICO%20PLAST%20DOO!5e0!3m2!1sbs!2sba!4v1621430974778!5m2!1sbs!2sba" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
