"use client"
import { AreaChart, Card, Text, Title } from "@tremor/react";
import { GrafEnaSelectionType } from "./Data";

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

const valueFormatter = (number: number): string => {
  return `$${Intl.NumberFormat("us").format(number).toString()}`;
};

type GrafDvaType = {
  selectedData: GrafEnaSelectionType | null;
}

export default function GrafDva({ selectedData }: GrafDvaType) {
  return (
    <Card style={{
      background: "#444444"
    }}>
      <Title></Title>
      <Text>Podatki prikazani za dan  v urah</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["Sales", "Profit"]}
        index="Month"
        colors={["green", "orange"]}
        yAxisWidth={60}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
}
