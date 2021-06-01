import React from 'react';
import imgLogo from '../components/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row gx-0 justifyCenter">
                        <div className="col-lg-4">
                            <div className="logoFooter">
                                <a href="#">
                                    <img className="logo" src={imgLogo}/>
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

export default Footer
