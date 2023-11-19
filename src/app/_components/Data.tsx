"use client"
import React from 'react';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import 'src/app/_components/Data.css'; // Please ensure the correct path for Data.css
import utrinki from 'public/02.jpg'; // Ensure correct path for the image
import Graf_ena from 'src/app/_components/Graf_ena';
import Graf_dva from 'src/app/_components/Graf_dva';

// Define the Data component
function Data() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17')); // Controlled picker for value
  const [vrednost, setVrednost] = React.useState<Dayjs | null>(dayjs('2022-04-17')); // Controlled picker for vrednost
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='test'>
        <div className='ola'>
          <div>
            
            <DatePicker
              label="Controlled picker for value"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
            <DatePicker
              label="Controlled picker for vrednost"
              value={vrednost}
              onChange={(newValue) => setVrednost(newValue)}
            />
            <Button variant="contained" >
              Default view
            </Button>
            <div>
              {vrednost === null && value === null ? (
                <Graf_ena />
              ) : (
                <Graf_dva />
              )}
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default Data; 