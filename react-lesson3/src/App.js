import './App.css';
import React, { useState } from 'react';

function App() {
  const[x, setX] = useState(0);
  const[y, setY] = useState(0);
  const clickHandler = ()=>{
    setX(x+1);
  }
  const clickHandler1 = ()=>{
    setY(y+1);
  }

  return (
    <div className="App">
      <h1>
        x:{x}
        y:{y}
        </h1>
      <button onClick={clickHandler}>click me </button>
      <button onClick={clickHandler1}>click me y</button>
    </div>
  );
}

export default App;
