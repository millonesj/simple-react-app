import React from 'react';
import './App.css';
import Greeting from './components/greeting'
import Timer from './components/timer'

function App() {
  return (
    <div className="App">
      <Greeting message="Jhonny"></Greeting>
      <Timer></Timer>
    </div>
  );
}

export default App;
