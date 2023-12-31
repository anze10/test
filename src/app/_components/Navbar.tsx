"use client"
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from 'public/scidrom.jpg'

import "./Navbar.css"
import Link from "next/link";
import { Button } from "@mui/material";

export type NavbarType = {
    navbarOpen: boolean,
    setNavbarOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ navbarOpen, setNavbarOpen }: NavbarType) => {
    const closeMenu = () => setNavbarOpen(false)

    return (
        <div className="header">
            <nav className='navbar'>
                <Link href="/" className='logo'>
                    <Image src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={() => setNavbarOpen(!navbarOpen)}>
                    {navbarOpen ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={navbarOpen ? "nav-menu active" : "nav-menu"}>
                    <Button href="/" variant="contained" onClick={closeMenu} sx={{ marginX: "10px" }}>
                        Domov
                    </Button>
                    <Button href="#podatki" variant="contained" onClick={closeMenu} sx={{ marginX: "10px" }}>
                        Podatki
                    </Button>
                    <Button href="#testemonials" variant="contained" onClick={closeMenu} sx={{ marginX: "10px" }}>
                        O nas
                    </Button>
                    {/* <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Domov</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#podatki' onClick={closeMenu}>Podatki</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testemonials' onClick={closeMenu}>O nas</a>
                    </li> */}

                </ul>
            </nav>
        </div >
    )
}

export default Navbar