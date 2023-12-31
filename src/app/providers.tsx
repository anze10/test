"use client"

import { ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createContext, useState } from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#009439',
        },
        secondary: {
            main: '#94005b',
        },
        background: {
            default: '#000814',
        },
    },
});

export const NavbarContext = createContext(false);

export default function Providers({ children }: { children: React.ReactNode }) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <NavbarContext.Provider value={navbarOpen}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {children}
                </LocalizationProvider>
            </NavbarContext.Provider>
        </ThemeProvider>
    );
}