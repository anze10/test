"use client"

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { meteoriti } from '@prisma/client';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React from 'react';
import Graf_dva from '~/app/_components/GrafDva';
import Graf_ena from '~/app/_components/GrafEna';
import { get_meteorites } from '../actions';
import './Data.css';

export default function Podatki() {
  const [grafEna, setGrafEna] = React.useState<Dayjs>(dayjs(Date.now()));
  const [grafDva, setGrafDva] = React.useState<Dayjs>(dayjs(Date.now()));
  const [displayedGraf, setDisplayedGraf] = React.useState<string | undefined>("graf_ena");
  const [meteoriti, setMeteoriti] = React.useState<meteoriti[]>([]);

  const update_meteorite_data = async (start_date: Dayjs, end_date: Dayjs) => {
    const result = await get_meteorites({ start_date: start_date.toISOString(), end_date: end_date.toISOString() })
    console.log("setting meteorite data", result)
    if (!result.data) return;
    setMeteoriti(result.data)
  }

  return (
    <div id="podatki" className='test'>
      <div className='ola'>
        <Box sx={{
          display: 'flex',
          paddingTop: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          backgroundColor: "#878787",
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          marginBottom: '20px',
          borderRadius: '4px',
        }}>
          <DatePicker
            value={grafEna}
            onChange={async (newValue) => {
              if (newValue == null) return
              setDisplayedGraf("graf_dva")
              setGrafEna(newValue)
              await update_meteorite_data(newValue, grafDva)
            }}
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }} />

          <DatePicker
            value={grafDva}
            onChange={async (newValue) => {
              if (newValue == null) return
              setDisplayedGraf("graf_dva")
              setGrafDva(newValue)
              await update_meteorite_data(grafEna, newValue)
            }}
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }} />

          <Button
            variant="contained"
            onClick={() => { setDisplayedGraf("graf_ena") }}
          >
            Počisti
          </Button>
        </Box>
        <div>
          {displayedGraf == "graf_ena" || displayedGraf == "" ? (
            <Graf_ena meteoriti={meteoriti} />
          ) : null}
          {displayedGraf == "graf_dva" ? (
            <Graf_dva />
          ) : null}
        </div>
      </div>
    </div>
  );
}