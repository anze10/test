"use client"
import Image from "next/image";
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from 'public/scidrom.jpg'

import  "./Navbar.css"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className="header">
            <nav className='navbar'>
                 <a href='/' className='logo'>
                    <Image src={logo} alt='Jebemu boga' />
                </a> 
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Domov</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Data' onClick={closeMenu}>Podatki</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>O nas</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar