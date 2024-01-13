"use client"

import 'src/app/_components/scidrom.css'
import Button from '@mui/material/Button';
import React from 'react'
import Footer from './footer';
import { Box } from '@mui/material';
import { InView, useInView } from 'react-intersection-observer';

const scidrom = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log("Lep dan")
  console.log({ inView })
  const [displayedFooter, setDisplayedFooter] = React.useState<boolean | undefined>(false);
  return (
    <div id="testemonials" className='scidrom'>
      <div className='na'>
        <p>Upam, da vam je bil zgornji prikaz podatkov všeč. Če imate kakršno koli mnenje o izboljšavi spletne strani ali pa na splošno o projektu, nas lahko kontaktirate s pritiskom na gumb &apos;Kontakt&apos;.</p>
        <br />
        <p>Sedaj pa namenimo še nekaj besed SCiDROMU. Scidrom je znanstveni laboratorij Šolskega centra Novo mesto, kjer dijaki pod mentorstvom profesorjev sodelujejo pri različnih projektih iz najrazličnejših strok. Če želite izvedeti več o nas, lahko s klikom na spodnji gumb &apos;Izvedi več&apos; pridete do naše spletne strani, kjer boste našli več informacij o nas.</p>
        <br />
        <div >
          <Button variant="contained" onClick={() => window.location.href = '/kontakt'}>Kontakt</Button>
          <Button variant="contained" color='primary' style={{ color: '#fff', margin: "10px" }} onClick={() => window.open('https://scidrom.sc-nm.si/', '_blank')}>Izvedi več</Button>
        </div >
        <br />
        <br />
        {/* <Box sx={{ position: "relative", backgroundColor: "orangered", width: "100%", padding: "10%", paddingBottom: "40%" }}>
          <br />
        </Box> */}
      </div>
      <InView onChange={(inView, entry) => setDisplayedFooter(inView)}>
        {
          displayedFooter ? <Footer /> : null
        }

      </InView>
    </div>

  )
}
/* tipka kontakterej me je ideja od dans in ce bo prevec  zajebavanja s tem d ato dela bom samo odstranu to sranje */

export default scidrom
