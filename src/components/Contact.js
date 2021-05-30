import React from 'react';
import { FaFacebook, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img from '../components/2.jpg';
import img8 from '../components/wintech2.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';
import { GiWindow } from 'react-icons/gi';

const About = () => {
    return (
        <>
            <section className="contacts-page" id="contact">
                <div className="container">
                    <div className="row gx-0">
                        <div className="">
                            <h3 className="contactHeader">KONTAKTIRAJTE NAS</h3>
                            <h6 className="">Osjećajte se slobodno da nas kontaktirate</h6>
                        </div>
                    </div>
                    <div className="row gx-0">
                        <div className="col-sm-4 articleContact">
                            <AiFillSetting className="commonIconsProducts commonIconsContact" />
                            <h5 className="contactHeader2">Posjetite nas</h5>
                            <a href="https://goo.gl/maps/MyzWeNNrovGLmBxr6">III ulica, Živinice 75270, Bosna i Hercegovina</a>
                        </div>
                        <div className="col-sm-4 articleContact">
                            <AiFillSetting className="commonIconsProducts commonIconsContact" />
                            <h5 className="contactHeader2">Nazovite nas</h5>
                            <p>064 41 74 841</p>
                            <p>061 392 925</p>
                            <p>060 33 96 286</p>
                        </div>
                        <div className="col-sm-4 articleContact">
                            <AiFillSetting className="commonIconsProducts commonIconsContact" />
                            <h5 className="contactHeader2">Pošaljite poruku</h5>
                            <p>rico-plast@gmail.com</p>
                            <a href="https://www.facebook.com/Rico-plast-106317514411877">Rico-plast</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="message-section">
                <div className="container">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-12">
                            <h2>Pošaljite Nam Poruku</h2>
                            <form className="form">
                                        <div className="col-md-12 colInput">
                                            <input type="text" placeholder="Unesite Ime i Prezime" name="name" className="contactForm" required="true" />
                                        </div>
                                        <div className="col-md-12 colInput">
                                            <input type="email" placeholder="Unesite Email" name="email" className="contactForm" required="true" />
                                        </div>
                                        <div className="col-md-12 colInput">
                                            <input type="text" placeholder="Upišite Poruku" name="message" className="contactForm" required="true" />
                                        </div>
                                        <div>
                                            <a className="btnAbout" href="/">Pošalji</a>
                                        </div>                              
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <div className="row gx-0">
                    <div className="col-lg-12 map2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11394.80386282076!2d18.6578459!3d44.4392959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb181ab963ba7d457!2sRICO%20PLAST%20DOO!5e0!3m2!1sbs!2sba!4v1621430974778!5m2!1sbs!2sba" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
            
            <footer className="footer-area">
                <div className="container">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-4">
                            <div className="logoFooter">
                                <a href="#">
                                    <img className="logo" src={img8}/>
                                </a>
                            </div>
                            <p className="footerText footerText1">Provjerite naše proizvode, vjerovatno ćete naći nešto što Vam odgovara. Poštujemo dogovor, zahtjeve kupca i investitora. Poštujemo rokove, izvodimo radove kvalitetno, koristimo kvalitetne materijale. Radimo brzo!</p>
                        </div>
                        <div className="col-lg-4 linkColumn">
                            <h6 className="contactText">NAŠE STRANICE</h6>
                            <ul className="footerList">
                                <li><a href="#" className="listItem">Početna</a></li>
                                <li><a href="#" className="listItem">Proizvodi</a></li>
                                <li><a href="#" className="listItem">O nama</a></li>
                                <li><a href="#" className="listItem">Kontakt</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 linkColumn2">
                            <h6 className="contactText">KONTAKT INFO</h6>
                            <div className="textFooterList">
                                <p className="footerText">Živinice, Bosna i Hercegovina</p>
                                <p className="footerText">064 41 74 841</p>
                                <p className="footerText">061 392 925</p>
                                <p className="footerText">060 33 96 286</p>
                                <p className="footerText">rico-plast@gmail.com</p>
                                <a href="https://www.facebook.com/Rico-plast-106317514411877">
                                    <FaFacebook className="social-media" />
                                </a>
                                <a href="https://www.instagram.com/">
                                    <FaInstagram className="social-media" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright-section">
                    <div className="row gx-0 copyrightRow">
                        <div className="col-lg-12">
                            <p className="copyright-text">By Programmer: Bekir Okić</p>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default About
