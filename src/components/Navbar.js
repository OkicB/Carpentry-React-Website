import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import imgLogo from '../components/logo.png';
import { CgMenuRight } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className="navbarFirst">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand imgLogo" href="#home"><Link to="/#home"><img src={imgLogo}/></Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <CgMenuRight className="menu-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link"><Link className="navLink" to="./#home">POČETNA</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link className="navLink" to='./Projects#projects'>PROIZVODI</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link className="navLink" to='./About#about'>O NAMA</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link className="navLink" to='./Contact#contact'>KONTAKT</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
