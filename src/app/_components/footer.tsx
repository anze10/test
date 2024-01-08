"use client"
import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = async () => {
    return (
        <Box component="footer" sx={{ textAlign: 'center', padding: '20px 0', backgroundColor: "black" }}>
            <Typography sx={{ color: "white" }}>
                @Scidrom 2024 vse pravice pridržane
            </Typography>
            <Typography sx={{ color: "white" }}>
                Spletno stran je izdelal Anže s pomočjo dveh prijateljev, katerima se iskreno zahvaljujem: luka in Tim.
            </Typography>
            <Link href="https://github.com/anze10" color="inherit" sx={{ color: "white" }}>
                <GitHubIcon sx={{ marginRight: 8 }} />
                Anže
            </Link>
            {' | '}
            <Link href="https://github.com/lukaprsina" color="inherit" sx={{ color: "white" }}>
                <GitHubIcon sx={{ marginRight: 8 }} />
                Luka
            </Link>
            {' | '}
            <Link href="timnahtigal" color="inherit" sx={{ color: "white" }}>
                <GitHubIcon sx={{ marginRight: 8 }} />
                Tim
            </Link>


        </Box>

    );
};

export default Footer;

