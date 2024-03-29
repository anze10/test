"use client"

import { Box, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import GrafDva from '~/app/_components/GrafDva';
import GrafEna from '~/app/_components/GrafEna';
import { type MeteoritJS, get_meteorites } from '../actions';
import './Data.css';

export default function Podatki() {
  const [datePickerEna, setDatePickerEna] = useState<Dayjs>(dayjs(Date.now()));
  const [datePickerDva, setDatepickerDva] = useState<Dayjs>(dayjs(Date.now()));

  const [displayedGraf, setDisplayedGraf] = useState<"graf_ena" | "graf_dva">("graf_ena");
  const [meteoriti, setMeteoriti] = useState<MeteoritJS[]>([]);
  const [selectedData, setSelectedData] = useState(null);


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
            value={datePickerEna}
            onChange={async (newValue) => {
              if (newValue == null) return
              setDisplayedGraf("graf_ena")
              setDatePickerEna(newValue)
              await update_meteorite_data(newValue, datePickerEna)
            }}
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }} />

          <DatePicker
            value={datePickerDva}
            onChange={async (newValue) => {
              if (newValue == null) return
              setDisplayedGraf("graf_ena")
              setDatepickerDva(newValue)
              await update_meteorite_data(datePickerEna, newValue)
            }}
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }}
          />
          <Button
            variant="contained"
            color='primary'
            style={{ color: '#fff' }}
            onClick={async () => {
              const ena = dayjs(Date.now())
              const dva = dayjs(Date.now())
              setDatePickerEna(dayjs(Date.now()));
              setDatepickerDva(dayjs(Date.now()));

              await update_meteorite_data(ena, datePickerEna);
              await update_meteorite_data(dva, datePickerDva)
            }}
          >
            Počisti</Button>
        </Box>
        <div>
          {displayedGraf == 'graf_ena' ? (
            <GrafEna meteoriti={meteoriti} onColumnClick={setSelectedData} />
          ) : null}
          {displayedGraf == 'graf_dva' ? (
            <GrafDva selectedData={selectedData} />
          ) : null}
        </div>
      </div>
    </div>
  );
}