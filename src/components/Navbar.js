import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import Projects from './Projects';

const Navbar = () => {
    return (
        <div className="navbarFirst">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand imgLogo" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><Link to="#home">POČETNA</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to={Projects}>PROIZVODI</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="#about">O NAMA</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="#contact">KONTAKT</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
