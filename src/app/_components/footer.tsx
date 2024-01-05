import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import { FaGithub } from 'react-icons/fa'; // Ensure this import is correct

const Footer = () => {
    return (
        <Box component="footer" sx={{ textAlign: 'center', padding: '20px 0' }}>
            <Typography variant="body1" gutterBottom>
                © 2024 Scidrom. Vse pravice pridržane.
            </Typography>
            <p>
                Spletno stran je izdelal jst s pomočjo dveh prijateljev, katerima se iskreno zahvaljujem: luka in Tim."
            </p>


        </Box>
    );
};

export default Footer;

