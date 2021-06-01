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
                            <p className="products-para">Ukoliko Vam trebaju mašine koje su pogodne za rezanje PVC profila, na pravom ste mjestu. Mašine se uvoze iz Turske čiji je kvalitet znatno bolji u odnosu na druge mašine. Brzina pomaka pile se može podesiti. Pneumatski sastav stezanja profila. Prikladno za rezanje profila PVC letvi. Horizontalna brzina unosa može se podesiti za precizno rezanje bez vibracija. Nalaze se i mnoge druge mašine, zato kontaktirajte nas, i odaberite sebi upravo ono što vam treba.</p>
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
                            <p className="products-para">Tijekom projekta trudimo se poštivati zadane izvedive rokove uz minimalne komplikacije i utjecaj na vaš životni ritam. Zamjena stolarije može biti skup zahvat ukoliko se ne donese prava odluka. Ako želite dobiti kvalitetnu stolariju uz uštedu vašeg novca, pregledajte ponude koje imamo i naručite stolariju koja će sigurno biti idealna za vaš dom. Za sve informacije koje vas zanimaju možete nas kontaktirati, jer ljubazan i pristupačan tim čeka na vas.</p>
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
                            <p className="products-para">Ulazna vrata imaju jako dobru površinu i sastav. Našu ponudu krasi veliki broj kreativnih vrata sa stilom. Stilovi i trendovi koje pratimo su popularni i korisni su u svim aspektima. Možete praviti dobru kombinaciju sa sobnim vratima u našoj ponudi. Za sve informacije koje vas zanimaju možete nas kontaktirati, jer ljubazan i pristupačan tim čeka na vas.</p>
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
                            <p className="products-para">U svijetu stolarije sobna vrata su ogledalo vašeg unutrašnjeg doma. U našoj poslovnici možete pronaći širok izbor dostupnih vrata u standardnim mjerama kao i vrata po mjeri u velikom broju dekora i izvedbi. Različite vrste vrata koja mogu biti korisna alternativa za izbor vaših sobnih vrata. Moderan dizajn je prvo što će privući pažnju u unutrašnjosti vašeg doma. Za sve informacije koje vas zanimaju možete nas kontaktirati, jer ljubazan i pristupačan tim čeka na vas.</p>
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
                            <p className="products-para">Jednostavni za korištenje, sigurni i trajni naizmjenični kompresori perfektni za manje firme, trgovine ili za indrustrijsku primjenu. Dizajnirani su da rade uspješno u različitim poljima. Odlične osobine omogućavaju lahko korištenje i prilagođavanje u svakom nivou. Za sve informacije koje vas zanimaju možete nas kontaktirati, jer ljubazan i pristupačan tim čeka na vas.</p>
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
