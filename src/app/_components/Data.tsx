"use client"
import React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import 'src/app/_components/Data.css'; 
import utrinki from 'public/sliak_zvezd.jpg'; 
import Graf_ena from 'src/app/_components/Graf_ena';
import Graf_dva from 'src/app/_components/Graf_dva';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd700', 
    },
    secondary: {
      main: '#ced8e4', 
    },
    background: {
      default: '#000814', 
    },
  },
});

function Data() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [vrednost, setVrednost] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='test'>
          <div className='ola'>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: '#000814',
                color: theme.palette.text.primary, 
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                marginBottom: '20px',
                borderRadius: '4px',
              }}>
              <DatePicker
                label="od"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{ backgroundColor: '#2a3e52', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px' }} />
              
              <DatePicker
                label="do"
                value={vrednost}
                onChange={(newValue) => setVrednost(newValue)}
                sx={{ backgroundColor: '#2a3e52', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px' }} />
              
              <Button variant="contained" color='primary'  style={{ color: '#fff' }}>Počisti</Button>
            </Box>
            <div>
              {vrednost === null && value === null ? (
                <Graf_ena />
              ) : (
                <Graf_dva />
              )}
            </div>
          </div>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default Data;