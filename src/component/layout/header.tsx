import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';
import './header.scss'
import Logo from '../assets/logo.png'
export default function Header() {

    return (
        <header className='main-navigation'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol className='col-md-2  d-flex  justify-content-start align-items-center' >
                        <div className="logo-wrapper">
                            <Link to='/' >
                                <img className='logo-image' src={Logo} alt='Logo Image' />
                            </Link>
                        </div>
                    </MDBCol>
                    <MDBCol className='d-md-flex d-none d-lg-flex col-md-8 justify-content-center align-items-center'>
                        <div className=''>
                            <nav className='navigation'>
                                <Link className='nav-item' to='/' > Home</Link>
                                <Link className='nav-item' to='/about' > About</Link>
                                <Link className='nav-item' to='/shop' > Shop</Link>
                                <Link className='nav-item' to='/contact-us' > Contact Us</Link>
                            </nav>
                        </div>
                    </MDBCol>
                    <MDBCol className='col-md-2 d-flex  justify-content-end align-items-center' >
                        One of three columns
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </header>
    );
}