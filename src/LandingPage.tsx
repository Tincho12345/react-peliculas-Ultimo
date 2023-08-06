import { useState, useEffect } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect (()=>{
      const timerId = setTimeout(()=>{
        setPeliculas({
          enCartelera: [
          {
            id: 1, 
            titulo: 'Spider-Man: Far from Home',
            poster: 'https://images.ecestaticos.com/NWIXPyQ9IBCsjVnb8NcbkYYDMYo=/2x2:540x720/560x747/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fef5%2F125%2Fab5%2Fef5125ab51c11c9f7d1166f8f6979eba.jpg'
          },
          {
            id: 2, 
            titulo: 'Moana',
            poster: 'https://www.smt.gob.ar/img/novedades/10617.jpg'
          }
        ],
      proximosEstrenos: [
        {
          id: 3, 
          titulo: 'Soul',
          poster: 'https://lumiere-a.akamaihd.net/v1/images/soul_poster_4_4c70209a.jpeg'
        }
      ]})
      }, 500);
      return () => clearTimeout(timerId);
    })
  
    return(
        <>
          <h3>En Cartelera</h3>
          <ListadoPeliculas peliculas={peliculas.enCartelera}/>
          <h3>Próximos Estrenos</h3>
          <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
    )
}