"use client"

import 'src/app/_components/scidrom.css'
import Button from '@mui/material/Button';
import React from 'react'

const scidrom = () => {
  return (
    <div id="testemonials" className='scidrom'>
      <div className='na'>
        <p>Upam, da vam je bil zgornji prikaz podatkov všeč. Če imate kakršno koli mnenje o izboljšavi spletne strani ali pa na splošno o projektu, nas lahko kontaktirate s pritiskom na gumb &apos;Kontakt&apos;.</p>
        <br />
        <p>Sedaj pa namenimo še nekaj besed SCiDROMU. Scidrom je znanstveni laboratorij Šolskega centra Novo mesto, kjer dijaki pod mentorstvom profesorjev sodelujejo pri različnih projektih iz najrazličnejših strok. Če želite izvedeti več o nas, lahko s klikom na spodnji gumb &apos;Izvedi več&apos; pridete do naše spletne strani, kjer boste našli več informacij o nas.</p>
        <br />
        <div >
          <Button variant="contained" /* color='primary' style={{ color: '#fff', margin: "10px" }} */>Kontakt</Button>
          <Button variant="contained" color='primary' style={{ color: '#fff', margin: "10px" }} onClick={() => window.open('https://scidrom.sc-nm.si/', '_blank')}>Izvedi več</Button>
        </div>
      </div>
    </div>

  )
}
/* tipka kontakterej me je ideja od dans in ce bo prevec  zajebavanja s tem d ato dela bom samo odstranu to sranje */

export default scidrom
