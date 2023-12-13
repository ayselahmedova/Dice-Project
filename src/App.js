import React from 'react';
import Dice from './components/Dice.jsx';
import './App.css'

const App = () => {
  return (
    <div className='diceComponent'>
      <Dice />
      <Dice />
    </div>
  );
};

export default App;
