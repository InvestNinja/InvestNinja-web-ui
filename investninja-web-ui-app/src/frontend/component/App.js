import React from 'react';
import NinjaAppBar from './NinjaAppBar.js';    
import PurpleAppBar from './PurpleAppBar.js';    
import SuccessButton from './SuccessButton.js'; 
import Carteira from './Carteira/Carteira.js';  
import { Button } from 'react-toolbox/lib/button'; 

const App = () => (
  <div>
    <NinjaAppBar />
    <PurpleAppBar />
    <Carteira />
    <section style={{ padding: 20 }}>
      <SuccessButton label='Success' primary raised />
      <Button label='Primary Button' primary />
    </section>
  </div>
);

export default App;
