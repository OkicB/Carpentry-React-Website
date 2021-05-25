import React from 'react';
import img1 from '../components/mašine.jpg';
import img2 from '../components/proizvodi.jpg';
import img3 from '../components/ulazna_vrata.jpg';
import img4 from '../components/ulazna_vrata2.jpg';
import img5 from '../components/rico_plast.jpg';

import img6 from '../components/sawin.png';
import img7 from '../components/teknik.png';
import img8 from '../components/wintech2.png';
import img9 from '../components/europen.png';
import img10 from '../components/dalgakiran.png';

const Projects = () => {
    return (
        <>
            <section className="products-page" id="projects">
                <div className="container">
                    <div className="row gx-0">
                        <div className=""></div>
                    </div>
                </div>
            </section>
            <section className="filter">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-12 col-md-6">
                            <h3 className="productH3">PROIZVODI</h3>
                        </div>
                    </div>
                    <div className="row gx-0">
                        <div className="col-sm-12">
                                <ul className="productsList">
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
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img2} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img3} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img4} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img5} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img6} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img7} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img8} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img9} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                                <a className="col-md-4 col-sm-4 col-xs-6">
                                    <img className="productsImg" src={img10} />
                                    <div className="hiddenItemContent">
                                        <span>Mašina</span>
                                        <h6>PVC/ALU mašina cnc</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
