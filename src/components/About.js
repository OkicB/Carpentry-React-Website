import React from 'react';
import { FaFacebook, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img from '../components/2.jpg';
import imgLogo from '../components/logo.png';

const About = () => {
    return (
        <>
            <section className="products-page" id="about" data-aos="fade-up">
                <div className="container">
                    <div className="row gx-0">
                        <div className="headerRow">
                            <h3 className="productHeader2">O NAMA</h3>
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
                                        <div className="article" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                            <h3>DOBRODOŠLICA</h3>
                                            <p className="article-introtext">Poštovani, Želimo Vam se zahvaliti na interesu koji pokazujete za našu kompaniju. Veliko nam je zadovoljstvo predstaviti novu web-stranicu kojom Vas pozivamo da se uvjerite u unaprijeđene stare, ali i nove mogućnosti našeg asortimana proizvoda i usluga i prodaja kao i u nova dostignuća našeg kreativnog tima. Već 20 godina inspirirani smo prateći trendove i nove modele od mašina za proizvodnju PVC/ALU stolarije do CNC mašina, kao i kompresor od običnih do vičanih, novih modela sobnih vrata, profili od 5 i 6 komora, komarnici i roletne. Neprekidno radimo na tome da ponudimo proizvode i usluge koji odgovaraju tržištu.</p>
                                        </div>

                                    </div>
                                    <div className="col-md-12 aboutCol aboutCol2">
                                        <div className="article2" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                            <h3>NAŠA PRIČA</h3>
                                            <p className="article-introtext2">Kompanija „Rico-plast d.o.o.“ sa sjedištem u Živinicama, osnovana je 2001. godine i uspješno posluje već 20 godina. Kompanija je specijalizirana za prodaju jednoglavnih, dvoglavnih i CNC mašina za proizvodnju PVC/ALU stolarije. Također nudimo i sobna vrata, pvc stolariju, roletne i komarnike. Otvoreni smo za usluge koje Vam trebaju. Priča o Kompaniji “Rico-plast” d.o.o. ujedno je i uzbudljiva priča. Stotine ljudi koji u svom radu uvijek nastoje pomjerati granice kreativnosti, zalaganja i timskog rada.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
