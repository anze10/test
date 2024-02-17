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
  Chart,
  ChartTypeRegistry,
  Point,
  BubbleDataPoint,
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
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
type neki = Chart<keyof ChartTypeRegistry, (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>


export default function GrafEna({ meteoriti, spremembaGrafa }: GrafEnaType) {
  const [graf, setGraf] = useState<Stolpec[]>([]);
  const chartRef = useRef<Chart<"bar", (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>>(null);


  {/*const chartRef = useRef<neki>(null);*/ }

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
        label: 'meteoriti',
        data: graf.map(item => item["Število meteoritov na dan"]),
        backgroundColor: 'green',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,

      },

    ],


  };
  const [datum, setDateum] = useState(new Date());
  return (
    <>


      <Card style={{ background: "#444444" }}>
        <Bar
          options={options}
          data={data}
          ref={chartRef}
          onClick={(event) => {
            const element = chartRef.current && getElementAtEvent(chartRef.current, event)[0];
            console.log(element);
            setDateum(graf[element.index]);
          }}
        />
      </Card>
    </>
  );

}
