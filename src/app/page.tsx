import Navbar from 'src/app/_components/Navbar'
import Predstavitev from "./_components/Predstavitev";
import Data from "./_components/Data";
import Scidrom from "~/app/_components/scidrom"


export default function Home() {
  return (
    <div>
      <Navbar />
      <Predstavitev />
      <Data />
      <Scidrom />
    </div>
  );
}