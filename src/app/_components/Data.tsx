"use client"

import React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import './Data.css';
import Graf_ena from 'src/app/_components/Graf_ena';
import Graf_dva from 'src/app/_components/Graf_dva';
import type { meteoriti } from '@prisma/client';

type PodatkiType = {
  meteorites: (start_date: Dayjs, end_date: Dayjs) => Promise<meteoriti[]>;
  podatki: meteoriti[];
};

export default function Podatki({ meteorites: getMeteoriteDataBetweenTwoDates }: PodatkiType) {
  const [grafEna, setGrafEna] = React.useState<Dayjs>(dayjs(Date.now()));
  const [grafDva, setGrafDva] = React.useState<Dayjs>(dayjs(Date.now()));
  const [displayedGraf, setDisplayedGraf] = React.useState<string | undefined>("graf_ena");

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
              // revalidateTag("invalidate")
              const result = await getMeteoriteDataBetweenTwoDates(newValue, grafDva)
              console.log({ result }, "from graf ena")
            }}
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }} />

          <DatePicker
            value={grafDva}
            onChange={async (newValue) => {
              if (newValue == null) return
              setDisplayedGraf("graf_dva")
              setGrafDva(newValue)
              // revalidateTag("invalidate")
              const result = await getMeteoriteDataBetweenTwoDates(grafEna, newValue)
              console.log({ result }, "from graf dva")
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
            <Graf_ena podatki={podatki} />
          ) : null}
          {displayedGraf == "graf_dva" ? (
            <Graf_dva />
          ) : null}
        </div>
      </div>
    </div>
  );
}