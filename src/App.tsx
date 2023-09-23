import './App.css';
import './Galaxy.css';

import { Center } from '@mantine/core';

import Gallery from './components/Gallery';
import Photos from './components/Photos';
import LinkTree from './components/LinkTree';
import Sparkles from './components/Sparkles';
import useMousePosition from './hooks/useMousePosition';

function App() {

  const mousePosition = useMousePosition();

  // Calculate mouse position offsets from center of screen
  const x = mousePosition.x ? mousePosition.x - window.innerWidth / 2 : 0;
  const y = mousePosition.y ? mousePosition.y - window.innerHeight / 2 : 0;

  return (
    <div className="App">
      <div id="galaxy" style={{ left: x / 300 + 'px', top: y / 300 + 'px',}}>
        <div className="bg"></div>
        <div className="stars-back" style={{ left: `calc(-150vw + ${ x / 30}px)`, top: `calc(-150vh + ${y / 30}px)`}}></div>
        <div className="stars-middle" style={{left: `calc(-150vw + ${ x / 50}px)`, top: `calc(-150vh + ${y / 50}px)`}}></div>
        <div className="stars-front" style={{ left: `calc(-150vw + ${ x / 65}px)`, top: `calc(-150vh + ${y / 65}px)`}}></div>
        <div className="bg center" style={{ left: `calc(-150vw + ${ x / 120}px)`, top: `calc(-150vh + ${y / 120}px)`}}></div>
      </div>

      <div className="header-decoration">
        <div className="header-icon" />
        <Sparkles interval={{ min: 30, max: 200, delta: 500 }}>
          <span  style={{padding: '1rem'}}>Mistress Of <Sparkles>Magik</Sparkles></span>
        </Sparkles>
        <div className='header-links'>
          <LinkTree />
        </div>
      </div>
      
      <Center sx={{ width: '100vw', height: '70vh', paddingTop: '15vh' }}>
        <Sparkles sparklesOnTop interval={{ min: 30, max: 200, delta: 500 }} color="rgba(222, 222, 222, 0.8)">
          <img style={{
            maxWidth: '50vw',
            maxHeight: '50vh',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: -4,
            marginTop: y / 50 + 'px',
            marginLeft: x / 50 + 'px',
          }} src="/mistress-cutout.png" alt="Mistress Of Magik" />
        </Sparkles>
      </Center>
      <Photos />
    </div>
  )
}

export default App
