"use client"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {

    return (

        <Box component="footer" sx={{ textAlign: 'center', padding: '20px 0', backgroundColor: "black" }}>
            <Typography sx={{ color: "white" }}>
                @Scidrom 2024 vse pravice pridržane
            </Typography>
            <Typography sx={{ color: "white" }}>
                Spletno stran je izdelal Anže s pomočjo dveh prijateljev, katerima se iskreno zahvaljujem: Luka in Tim.
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
            <Link href="https://github.com/timnahtigal" color="inherit" sx={{ color: "white", marginRight: 8 }}>
                <GitHubIcon sx={{ marginRight: 1 }} />
                Tim
            </Link>


        </Box>


    );
};

export default Footer;

