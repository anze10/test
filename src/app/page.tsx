import Navbar from 'src/app/_components/Navbar'
import Predstavitev from "./_components/Predstavitev";
import Data from "./_components/Data";
import Scidrom from "~/app/_components/scidrom"
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Predstavitev />
      <Data />
      <Scidrom />
    </Box>
  );
}