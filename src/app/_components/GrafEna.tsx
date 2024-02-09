"use client"

import React, { useEffect, useState } from "react";
import { Card } from "@tremor/react";
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

import type { MeteoritJS } from "../actions";
type Stolpec = {
  date: number
  "Število meteoritov na dan": number
}

type GrafEnaType = {
  meteoriti: MeteoritJS[];
  onColumnClick: React.Dispatch<React.SetStateAction<GrafEnaSelectionType | null>>;
};
export type GrafEnaSelectionType = {
  date: number;
};
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

const meteoritNaDan = new Map<number, number>();

export default function GrafEna({ meteoriti }: { meteoriti: MeteoritJS[] }) {
  const [graf, setGraf] = useState<Stolpec[]>([]);

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
        label: 'Število meteoritov na dan',
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
