import React, { useEffect, useMemo, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { type Stolpec } from './Data';
import { type MeteoritJS } from '../actions';

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


type GrafDvaType = {
  selectedMeteoriti?: Stolpec;
}

type ChartType = ChartData<"bar", number[], number>;

const GrafDva = ({ selectedMeteoriti }: GrafDvaType) => {
  // const chartRef = useRef<ChartType>();
  const data = useMemo(() => {
    if (!selectedMeteoriti) return;
    const groups: number[] = Array.from({ length: 24 }, () => 0);

    for (const meteorit of selectedMeteoriti?.meteoriti) {
      const hour = meteorit.cas.getHours();
      const arr_per_hour = groups[hour];

      if (typeof arr_per_hour === 'undefined') throw new Error("arr_per_hour is undefined");
      groups[hour]++;
    }

    return {
      labels: Array.from({ length: 24 }, (_, i) => i),
      datasets: [
        {
          label: 'meteoriti',
          data: groups,
          backgroundColor: 'green',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,

        },
      ],
    }
  }, [selectedMeteoriti]);

  useEffect(() => {
    console.log("to so izbrani meteoriti", { selectedMeteoriti })
  }, [selectedMeteoriti])

  return <Bar
    options={options}
    data={data!}
  // ref={chartRef}
  />;
}

export default GrafDva;
