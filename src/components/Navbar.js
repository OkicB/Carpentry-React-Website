import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import Projects from './Projects';
import imgLogo from '../components/logo.png';
import { CgMenuRight } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className="navbarFirst">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand imgLogo" href="#home"><Link to="/"><img src={imgLogo}/></Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <CgMenuRight className="menu-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home"><Link className="navLink" to="/">POČETNA</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects"><Link className="navLink" to='./Projects'>PROIZVODI</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about"><Link className="navLink" to='./About'>O NAMA</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact"><Link className="navLink" to='./Contact'>KONTAKT</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
