import React from 'react';
import './App.css';
import Greeting from './components/greeting'
import Timer from './components/timer'
import TodoApp from './components/todoApp';
function App() {
  return (
    <div className="App">
      <Greeting message="Jhonny"></Greeting>
      <Timer></Timer>
      <TodoApp></TodoApp>
    </div>
  );
}

export default App;
