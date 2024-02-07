"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import GrafEnaSelectionType from "./Data";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  // ...
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
];

const GrafDva = ({ selectedData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => d.Month),
        datasets: [
          {
            label: 'Sales',
            data: data.map(d => d.Sales),
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: false,
          },
          {
            label: 'Profit',
            data: data.map(d => d.Profit),
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 165, 0, 0.5)',
            fill: false,
          }
        ]
      },
      options: {
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return `$${Intl.NumberFormat("us").format(value)}`;
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true
          }
        },
        maintainAspectRatio: false
      }
    });

    return () => chart.destroy();
  }, [selectedData]); // Re-render chart if selectedData changes

  return (
    <div style={{ background: "#444444", padding: "20px", height: "450px" }}>
      <h2>Podatki prikazani za dan v urah</h2>
      <canvas ref={chartRef} style={{ height: "400px" }}></canvas>
    </div>
  );
};

export default GrafDva;
