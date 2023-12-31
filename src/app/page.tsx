import Navbar, { NavbarType } from 'src/app/_components/Navbar'
import Predstavitev from "./_components/Predstavitev";
import Data from "./_components/Data";
import Scidrom from "~/app/_components/scidrom"
import { Box } from '@mui/material';


export default function Home({ navbarOpen, setNavbarOpen }: NavbarType) {
  return (
    <Box>
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Predstavitev />
      <Data />
      <Scidrom />
    </Box>
  );
}