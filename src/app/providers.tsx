"use client"

import { ThemeProvider, createTheme } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const DynamicLocalizationProvider = dynamic(() => import("@mui/x-date-pickers").then(mod => mod.LocalizationProvider), {
    ssr: false,
});

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
            <DynamicLocalizationProvider dateAdapter={AdapterDayjs}>
                {children}
            </DynamicLocalizationProvider>
        </ThemeProvider>
    );
}