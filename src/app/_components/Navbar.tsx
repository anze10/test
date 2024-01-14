"use client"
import Image from "next/image";
import logo from 'public/scidrom.jpg';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Button } from "@mui/material";
import Link from "next/link";
import "./Navbar.css";

export type NavbarType = {
    navbarOpen: boolean,
    setNavbarOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
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