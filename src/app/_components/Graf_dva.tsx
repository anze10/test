"use client"
import { Card, AreaChart, Title, Text } from "@tremor/react";

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

export default function Example() {
  return (
    <Card style={{
      background: "#444444"
    }}>
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit</Text>
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
