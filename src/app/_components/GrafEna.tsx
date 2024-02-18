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
import { useEffect, useState } from "react";
import type { MeteoritJS } from "../actions";
import Card from '@mui/material/Card';

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
      text: 'Število meteoritiv v časovnem obdobju',
    },
  },
};

type Stolpec = {
  date: string;
  "Število meteoritov na dan": number;
};

type GrafEnaType = {
  stolpciMeteoritov: MeteoritJS[][];
  onColumnClicked: (index?: number) => void;
}

/* new_graf.push({
        date: new Date(key).toLocaleDateString("en-US"),
        "Število meteoritov na dan": value,
      }); */

type ChartType = Chart<"bar", (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>

export default function GrafEna({ stolpciMeteoritov, onColumnClicked }: GrafEnaType) {
  const chartRef = useRef<ChartType>();

  const data = useMemo(() => ({
    labels: stolpciMeteoritov.map(item => item.date),
    datasets: [
      {
        label: 'meteoriti',
        data: stolpciMeteoritov.map(item => item["Število meteoritov na dan"]),
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
