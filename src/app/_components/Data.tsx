"use client"

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import Graf_dva from '~/app/_components/GrafDva';
import Graf_ena from '~/app/_components/GrafEna';
import { type MeteoritJS, get_meteorites } from '../actions';
import './Data.css';

export default function Podatki() {
  const [grafEna, setGrafEna] = useState<Dayjs>(dayjs(Date.now()));
  const [grafDva, setGrafDva] = useState<Dayjs>(dayjs(Date.now()));
  const [displayedGraf, setDisplayedGraf] = useState<string | undefined>("graf_ena");
  const [meteoriti, setMeteoriti] = useState<MeteoritJS[]>([]);

  const update_meteorite_data = async (start_date: Dayjs, end_date: Dayjs) => {
    const result = await get_meteorites({ start_date: start_date.toISOString(), end_date: end_date.toISOString() })
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
              // setDisplayedGraf("graf_dva")
              setGrafEna(newValue)
              await update_meteorite_data(newValue, grafDva)
            }}
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }} />

          <DatePicker
            value={grafDva}
            onChange={async (newValue) => {
              if (newValue == null) return
              // setDisplayedGraf("graf_dva")
              setGrafDva(newValue)
              await update_meteorite_data(grafEna, newValue)
            }}
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }}
          />
          <FormControl fullWidth>
            <InputLabel id="graf_meteoriti">Age</InputLabel>
            <Select
              labelId="graf_meteoriti"
              id="demo-simple-select"
              value={displayedGraf}
              label="Age"
              defaultValue='graf_ena'
              onChange={(e) => setDisplayedGraf(e.target.value)}
            >
              <MenuItem value={"graf_ena"}>Graf ena</MenuItem>
              <MenuItem value={"graf_dva"}>Graf dva</MenuItem>
            </Select>
          </FormControl>
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