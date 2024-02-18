"use client"

import { Box, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { type Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import Graf_dva from '~/app/_components/GrafDva';
import Graf_ena from '~/app/_components/GrafEna';
import { type MeteoritJS, get_meteorites } from '../actions';
import './Data.css';

export type Stolpec = {
  date: number;
  meteoriti: MeteoritJS[];
};

export default function Podatki() {
  const [datePickerEna, setDatePickerEna] = useState<Dayjs>(dayjs().subtract(100, 'day'));
  const [datePickerDva, setDatepickerDva] = useState<Dayjs>(dayjs());
  const [selectedGraph, setSelectedGraph] = useState<string | undefined>("graf_ena");
  const [meteoriti, setMeteoriti] = useState<MeteoritJS[]>([]);
  const [selectedMeteoriti, setSelectedMeteoriti] = useState<Stolpec | undefined>(undefined);
  const [meteoritNaDan, setMeteoritiNaDan] = useState(new Map<number, MeteoritJS[]>());
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>();

  const update_meteorite_data = async (start_date: Dayjs, end_date: Dayjs) => {
    const result = await get_meteorites({ start_date: start_date.toISOString(), end_date: end_date.toISOString() })
    if (!result.data) return;
    setMeteoriti(result.data)
  }

  useEffect(() => {
    // A Map object iterates entries, keys, and values in the order of entry insertion. - Mozilla
    const groups = new Map<number, MeteoritJS[]>();

    for (const meteorit of meteoriti) {
      const month = meteorit.cas.getMonth();
      const day = meteorit.cas.getDate();
      const year = meteorit.cas.getFullYear();
      const approx_date = new Date(year, month, day);

      // add to the map using approx_date and create an array if the value does not exist
      if (!groups.has(approx_date.getTime())) {
        groups.set(approx_date.getTime(), [meteorit]);
      } else {
        groups.get(approx_date.getTime())?.push(meteorit);
      }
    }

    setMeteoritiNaDan(groups);
  }, [meteoriti]);

  const meteoriti_array = useMemo(() => {
    const array: Stolpec[] = [];
    for (const [date, meteoriti] of meteoritNaDan) {
      array.push({
        date,
        meteoriti
      });
    }

    return array
  }, [meteoritNaDan]);

  useEffect(() => {
    void update_meteorite_data(datePickerEna, datePickerDva)
  }, [datePickerEna, datePickerDva]);

  function reset_date_pickers() {
    setDatePickerEna(dayjs().subtract(100, 'day'));
    setDatepickerDva(dayjs());
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
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }}
            value={datePickerEna}
            onChange={(newValue) => {
              if (newValue == null) return
              setDatePickerEna(newValue)
            }}
          />

          <DatePicker
            sx={{ backgroundColor: '#a9a9a9', color: '#fff', border: 'none', borderRadius: '4px' }}
            value={datePickerDva}
            onChange={(newValue) => {
              if (newValue == null) return
              setDatepickerDva(newValue)
            }}
          />
          {selectedDate && selectedGraph == "graf_dva" ? <>
            <span>{selectedDate.date()}. {selectedDate.month()}</span>
          </> : null}
          <Button
            variant="contained"
            color='primary'
            style={{ color: '#fff' }}
            onClick={() => {
              reset_date_pickers()
              setSelectedMeteoriti(undefined);
              setSelectedGraph("graf_ena");
            }}
          >
            Počisti</Button>
        </Box>
        <div>
          {selectedGraph == "graf_ena" ? (
            <Graf_ena
              stolpciMeteoritov={meteoriti_array}
              onColumnClicked={(index?: number) => {
                if (typeof index !== 'number') return;

                const stolpec = meteoriti_array[index]
                if (typeof stolpec === 'undefined') return;

                setSelectedDate(dayjs(stolpec.date))
                setSelectedMeteoriti(stolpec);
                setSelectedGraph("graf_dva");
              }}
            />
          ) : null}
          {selectedGraph == "graf_dva" ? (
            <Graf_dva selectedMeteoriti={selectedMeteoriti} />
          ) : null}
        </div>
      </div>
    </div>
  );
}