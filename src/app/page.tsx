"use server"

import Navbar from 'src/app/_components/Navbar'
import Predstavitev from "./_components/Predstavitev";
import Data from "./_components/Data";
import Scidrom from "~/app/_components/scidrom"
import { Box } from '@mui/material';
import { Dayjs } from "dayjs";
import { db } from "~/server/db";

const getMeteoriteDataBetweenTwoDates = async (start_date: Dayjs, end_date: Dayjs) => {
  const result = await db.meteoriti.findMany({
    where: {
      dan: {
        gte: start_date.toDate(),
        lte: end_date.toDate()
      }
    },
  })

  return result;
}

export default async function Home() {
  const meteorites = await getMeteoriteDataBetweenTwoDates(new Dayjs(), new Dayjs())

  return (
    <Box>
      <Navbar />
      <Predstavitev />
      <Data meteorites={meteorites} />
      <Scidrom />
    </Box>
  );
}