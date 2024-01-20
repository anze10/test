"use client"
import { BarChart, Card, Title } from "@tremor/react";
import Graf_dva from '~/app/_components/GrafDva';
import { useEffect, useState } from "react";
import type { MeteoritJS } from "../actions";
import { GrafEnaSelectionType } from "./Data";

type Stolpec = {
  date: number
  "Število meteoritov na dan": number
}

const meteoritNaDan = new Map<number, number>()

type GrafEnaType = {
  meteoriti: MeteoritJS[];
  onColumnClick: React.Dispatch<React.SetStateAction<GrafEnaSelectionType | null>>;
};

// TODO: uporabi onColumnClick
export default function GrafEna({ meteoriti, onColumnClick }: GrafEnaType) {
  const [graf, setGraf] = useState<Stolpec[]>([]);

  useEffect(() => {
    meteoritNaDan.clear()

    for (const meteorit of meteoriti) {
      const month = meteorit.cas.getMonth()
      const day = meteorit.cas.getDate()
      const year = meteorit.cas.getFullYear()
      // create date from year, month, day
      const approx_date = new Date(year, month, day)

      meteoritNaDan.set(approx_date.getTime(), (meteoritNaDan.get(approx_date.getTime()) ?? 0) + 1)
    }

    const new_graf: Stolpec[] = [];
    for (const [key, value] of meteoritNaDan) {
      new_graf.push({
        date: key,
        "Število meteoritov na dan": value
      })
    }
    setGraf(new_graf)
  }, [meteoriti])


  return (
    <>
      <Card style={{
        background: "#444444"
      }}>

        <Title>Število meteoritiv v časovnem obdobju</Title>
        <BarChart
          className="mt-6"
          data={graf}
          categories={["Število meteoritov na dan"]}
          index="date"
          colors={["green"]}
          yAxisWidth={30}
          valueFormatter={(miliseconds: number): string => {
            const new_date = new Date(miliseconds).toLocaleDateString("en-US")
            console.log(miliseconds, new_date)
            return new_date
          }}
          onValueChange={(value) => {
            console.log({ value })
            onColumnClick(value)
          }}
        />
      </Card>
    </>
  );
}
