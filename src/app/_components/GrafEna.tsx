"use client"

import React, { Dispatch, SetStateAction, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Graf_dva from '~/app/_components/GrafDva';
import { useEffect, useState } from "react";
import type { MeteoritJS } from "../actions";
import GrafEnaSelectionType from "./Data";
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

const meteoritNaDan = new Map<number, number>();

type GrafEnaType = {
  meteoriti: MeteoritJS[];
  spremembaGrafa: Dispatch<SetStateAction<string>>;
}

export default function GrafEna({ meteoriti, spremembaGrafa }: GrafEnaType) {
  const [graf, setGraf] = useState<Stolpec[]>([]);
  const chartRef = useRef(null);

  useEffect(() => {
    meteoritNaDan.clear();

    for (const meteorit of meteoriti) {
      const month = meteorit.cas.getMonth();
      const day = meteorit.cas.getDate();
      const year = meteorit.cas.getFullYear();
      const approx_date = new Date(year, month, day);

      meteoritNaDan.set(approx_date.getTime(), (meteoritNaDan.get(approx_date.getTime()) ?? 0) + 1);
    }

    const new_graf: Stolpec[] = [];
    for (const [key, value] of meteoritNaDan) {
      new_graf.push({
        date: new Date(key).toLocaleDateString("en-US"),
        "Število meteoritov na dan": value,
      });
    }
    setGraf(new_graf);
  }, [meteoriti]);
  const data = {
    labels: graf.map(item => item.date),
    datasets: [
      {
        label: 'Dataset 1',
        data: graf.map(item => item["Število meteoritov na dan"]),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Card style={{ background: "#444444" }}>
        <Bar options={options} data={data} />;
      </Card>
    </>
  );
}
