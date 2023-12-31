"use client"

import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import './Data.css';
import Graf_ena from 'src/app/_components/Graf_ena';
import Graf_dva from 'src/app/_components/Graf_dva';



export default function Podatki() {
  const [grafEna, setGrafEna] = React.useState<Dayjs>(dayjs('2022-04-17'));
  const [grafDva, setGrafDva] = React.useState<Dayjs>(dayjs('2022-04-17'));
  const [displayedGraf, setDisplayedGraf] = React.useState<string | undefined>("graf_ena");

  useEffect(() => {
    console.log(displayedGraf)
  }, [displayedGraf])

  return (

    <div id="podatki" className='test'>
      <div className='ola'>
        <Box sx={{
          display: 'flex',
          paddingTop: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          backgroundColor: 'black',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          marginBottom: '20px',
          borderRadius: '4px',
        }}>
          <DatePicker
            value={grafEna}
            onChange={(newValue) => {
              setDisplayedGraf("graf_dva")
              setGrafEna(newValue)
            }}
            sx={{ backgroundColor: '#2a3e52', color: '#fff', border: 'none', borderRadius: '4px' }} />

          <DatePicker
            value={grafDva}
            onChange={(newValue) => {
              setDisplayedGraf("graf_dva")
              setGrafDva(newValue)
            }}
            sx={{ backgroundColor: '#2a3e52', color: '#fff', border: 'none', borderRadius: '4px' }} />

          <Button
            variant="contained"
            onClick={() => { setDisplayedGraf("graf_ena") }}
          >
            Počisti
          </Button>
        </Box>
        <div>
          {displayedGraf == "graf_ena" || displayedGraf == "" ? (
            <Graf_ena />
          ) : null}
          {displayedGraf == "graf_dva" ? (
            <Graf_dva />
          ) : null}
        </div>
      </div>
    </div>

  );
}