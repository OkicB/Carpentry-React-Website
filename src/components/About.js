import React from 'react';
import { FaFacebook, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img from '../components/2.jpg';
import img8 from '../components/wintech2.png';

const About = () => {
    return (
        <>
            <section className="products-page" id="about">
                <div className="container">
                    <div className="row gx-0">
                        <div className="headerRow">
                            <h3 className="productHeader">O NAMA</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-history-page">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-12">
                            <div className="about-header">
                                <h3 className="offerHeader">RICO-PLAST</h3>
                            </div>
                            <div className="article-list">
                                <div className="row gx-0 aboutRow">
                                    <div className="col-md-12 aboutCol aboutCol1">
                                        <div className="article">
                                            <h3>OVO JE NAŠ PROFIL</h3>
                                            <p className="article-introtext">Poštovani, Želimo Vam se zahvaliti na interesu koji pokazujete za našu kompaniju. Veliko nam je zadovoljstvo predstaviti novu web-stranicu kojom Vas pozivamo da se uvjerite u unaprijeđene stare, ali i nove mogućnosti našeg asortimana proizvoda i usluga i prodaja kao i u nova dostignuća našeg kreativnog tima. Već 20 godina inspirirani smo pratimo trendove i nove modele od mašina za proizvodnju PVC/ALU  stolarije do CNC mašina, kao i kompresor od obični do vičanih, novih modela sobnih vrata , profili od 5 i 6 komora ,komarnici,roletne i neprekidno radimo na tome da ponudimo proizvode i usluge koji odgovaraju tržištu.</p>
                                        </div>

                                    </div>
                                    <div className="col-md-12 aboutCol aboutCol2">
                                        <div className="article2">
                                            <h3>OVO JE NAŠ PROFIL 2</h3>
                                            <p className="article-introtext2">Priča o Kompaniji “Rico-plast” d.o.o. ujedno je i uzbudljiva priča stotine ljudi koji u svom radu uvjek nastoje pomjerati granice kreativnosti, zalaganja i timskog rada.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <a href="https://www.facebook.com/">
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
