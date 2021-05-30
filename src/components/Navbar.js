import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import Projects from './Projects';

const Navbar = () => {
    return (
        <div className="navbarFirst">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand imgLogo" href="#home"><Link to="/">LOGO</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home"><Link to="/">POČETNA</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects"><Link to='./Projects'>PROIZVODI</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about"><Link to='./About'>O NAMA</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact"><Link to='./Contact'>KONTAKT</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
