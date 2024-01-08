"use client"
import React, { useEffect, useMemo } from 'react';
import { Typography, Link, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";

const Footer = () => {
    const size = useWindowSize();
    const [{ x, y }, scrollTo] = useWindowScroll();
    const footerShown = useMemo(() => {
        if (typeof size.height !== "number" || typeof y !== "number") return
        return size.height - y < 1
    }, [size, y])
    useEffect(() => {
        console.log({ footerShown, sizeheight: size.height, y })
    }, [footerShown, size, y])
    return (
        <Box hidden={!footerShown} component="footer" sx={{ textAlign: 'center', padding: '20px 0', backgroundColor: "black" }}>
            <Typography sx={{ color: "white" }}>
                @Scidrom 2024 vse pravice pridržane
            </Typography>
            <Typography sx={{ color: "white" }}>
                Spletno stran je izdelal Anže s pomočjo dveh prijateljev, katerima se iskreno zahvaljujem: luka in Tim.
            </Typography>
            <Link href="https://github.com/anze10" color="inherit" sx={{ color: "white", marginRight: 8 }}>
                <GitHubIcon sx={{ marginRight: 1 }} />
                Anže
            </Link>
            {' | '}
            <Link href="https://github.com/lukaprsina" color="inherit" sx={{ color: "white", marginRight: 8 }}>
                <GitHubIcon sx={{ marginRight: 1 }} />
                Luka
            </Link>
            {' | '}
            <Link href="timnahtigal" color="inherit" sx={{ color: "white", marginRight: 8 }}>
                <GitHubIcon sx={{ marginRight: 1 }} />
                Tim
            </Link>


        </Box>

    );
};

export default Footer;

