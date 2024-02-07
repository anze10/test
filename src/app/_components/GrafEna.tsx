import React, { useEffect, useState, useRef } from "react";
import { Card, Title } from "@tremor/react";
import Chart from 'chart.js/auto';
import type { MeteoritJS } from "../actions";

type Stolpec = {
  date: string;
  "Število meteoritov na dan": number;
};

const meteoritNaDan = new Map<number, number>();

export default function GrafEna({ meteoriti }: { meteoriti: MeteoritJS[] }) {
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

  useEffect(() => {
    if (chartRef.current && graf.length > 0) {
      const chartContext = chartRef.current.getContext('2d');
      new Chart(chartContext, {
        type: 'bar',
        data: {
          labels: graf.map(item => item.date),
          datasets: [{
            label: 'Število meteoritov na dan',
            backgroundColor: 'green',
            data: graf.map(item => item["Število meteoritov na dan"]),
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Število meteoritiv v časovnem obdobju'
            }
          }
        }
      });
    }
  }, [graf]);

  return (
    <>
      <Card style={{ background: "#444444" }}>
        <Title>Število meteoritiv v časovnem obdobju</Title>
        <canvas ref={chartRef} className="mt-6"></canvas>
      </Card>
    </>
  );
}
