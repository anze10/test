import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = async () => {
    return (
        <Box component="footer" sx={{ textAlign: 'center', padding: '20px 0' }}>
            <Typography>
                Spletno stran je izdelal jst s pomočjo dveh prijateljev, katerima se iskreno zahvaljujem: luka in Tim."
            </Typography>
            <Link href="https://github.com/anze10" color="inherit">
                <GitHubIcon sx={{ marginRight: 8 }} />
                Profile 1
            </Link>
            {' | '}
            <Link href="https://github.com/lukaprsina" color="inherit">
                <GitHubIcon sx={{ marginRight: 8 }} />
                Profile 1
            </Link>
            {' | '}
            <Link href="timnahtigal" color="inherit">
                <GitHubIcon sx={{ marginRight: 8 }} />
                Profile 1
            </Link>


        </Box>

    );
};

export default Footer;

