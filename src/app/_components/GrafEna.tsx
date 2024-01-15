"use client"
import type { meteoriti } from "@prisma/client";
import { BarChart, Card, Title } from "@tremor/react";
import { useEffect, useState } from "react";

const chartdata3 = [
  {
    date: "Jan 23",
    "2022": 45,
    "2023": 78,
  },
  {
    date: "Feb 23",
    "2022": 52,
    "2023": 71,
  },
  {
    date: "Mar 23",
    "2022": 48,
    "2023": 80,
  },
  {
    date: "Apr 23",
    "2022": 61,
    "2023": 65,
  },
  {
    date: "May 23",
    "2022": 55,
    "2023": 58,
  },
  {
    date: "Jun 23",
    "2022": 67,
    "2023": 62,
  },
  {
    date: "Jul 23",
    "2022": 60,
    "2023": 54,
  },
  {
    date: "Aug 23",
    "2022": 72,
    "2023": 49,
  },
  {
    date: "Sep 23",
    "2022": 65,
    "2023": 52,
  },
  {
    date: "Oct 23",
    "2022": 68,
    "2023": null,
  },
  {
    date: "Nov 23",
    "2022": 74,
    "2023": null,
  },
  {
    date: "Dec 23",
    "2022": 71,
    "2023": null,
  },
];

type DanInMesec = {
  dan: number
  mesec: number
}

type Stolpec = {
  date: string
  "Število meteoritov na dan": number
}

const meteoritNaDan = new Map<DanInMesec, number>()
export default function GrafEna({ meteoriti }: { meteoriti: meteoriti[] }) {
  const [graf, setGraf] = useState<Stolpec[]>([]);

  useEffect(() => {
    meteoritNaDan.clear()

    for (const meteorit of meteoriti) {
      const danInMesec: DanInMesec = {
        dan: meteorit.cas.getDay(),
        mesec: meteorit.cas.getMonth(),
      }

      //get or set meteoritNaDan
      meteoritNaDan.set(danInMesec, (meteoritNaDan.get(danInMesec) ?? 0) + 1)
    }

    const new_graf: Stolpec[] = [];
    for (const [key, value] of meteoritNaDan) {
      new_graf.push({
        date: `${key.mesec}. ${key.dan}`,
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

        <Title>Closed Pull Requests</Title>
        <BarChart
          className="mt-6"
          data={graf}
          categories={["Število meteoritov na dan"]}
          index="date"
          colors={["green"]}
          yAxisWidth={30}

        />
      </Card>
    </>
  );
}
