"use client"

import { ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { ReactNode } from "react";

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

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {children}
            </LocalizationProvider>
        </ThemeProvider>
    );
}