"use client"

import React, { useMemo, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type Chart,
  type Point,
  type BubbleDataPoint,
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import { type Stolpec } from './Data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Število meteoritov na dan',
    },
  },
};

type GrafEnaType = {
  stolpciMeteoritov: Stolpec[];
  onColumnClicked: (index?: number) => void;
}

type ChartType = Chart<"bar", (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>

export default function GrafEna({ stolpciMeteoritov, onColumnClicked }: GrafEnaType) {
  const chartRef = useRef<ChartType>();

  const data = useMemo(() => ({
    // Date from Unix miliseconds    
    labels: stolpciMeteoritov.map(item => new Date(item.date).toLocaleDateString("en-US")),
    datasets: [
      {
        label: 'meteoriti',
        data: stolpciMeteoritov.map(item => item.meteoriti.length),
        backgroundColor: 'green',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,

      },
    ],
  }), [stolpciMeteoritov]);

  return (
    <>
      <Card style={{ background: "#444444" }}>
        <Bar
          options={options}
          data={data}
          ref={chartRef}
          onClick={(event) => {
            const element = chartRef.current && getElementAtEvent(chartRef.current, event)[0];
            onColumnClicked(element?.index);
          }}
        />
      </Card>
    </>
  );
}
