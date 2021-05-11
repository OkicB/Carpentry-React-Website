import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbarFirst">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand imgLogo" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">POČETNA <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PROIZVODI</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">O NAMA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">KONTAKT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
