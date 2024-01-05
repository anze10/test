import Navbar, { NavbarType } from 'src/app/_components/Navbar'
import Predstavitev from "./_components/Predstavitev";
import Data from "./_components/Data";
import Scidrom from "~/app/_components/scidrom"
import { Box } from '@mui/material';
import Footer from '~/app/_components/footer';



export default function Home() {
  return (
    <Box>
      <Navbar />
      <Predstavitev />
      <Data />
      <Scidrom />
      <Footer />
    </Box>
  );
}