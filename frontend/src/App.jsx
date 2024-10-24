import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coctail from './compontents/Coctail'

function App() {
  return(
    <div className='container'>
      <h2>Welcome to the best cocktail info website🫶</h2>
      <Coctail/>
    </div>
  );

}

export default App;
