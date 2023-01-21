import './App.css';
import React, { useState } from 'react';

const { useEffect } = require("react");

// function App() {
//   const[x, setX] = useState(0);
//   const[y, setY] = useState(0);
//   const clickHandler = ()=>{
//     setX(x+1);
//   }
//   const clickHandler1 = ()=>{
//     setY(y+1);
//   }

//   return (
//     <div className="App">
//       <h1>
//         x:{x}
//         y:{y}
//         </h1>
//       <button onClick={clickHandler}>click me </button>
//       <button onClick={clickHandler1}>click me y</button>
//     </div>
//   );
// }

// export default App;

//mounting komponentis dabadeba - anu roca pirvelad daiseta domshi
//updating =  komponenti ganaxlda, magalitad state sheicvala
// unmounting - komponentis sikvdili, komponenti domidan qreba


const App =()=>{
  const [x, setX] = useState(0);
  useEffect( () =>{
    console.log("after render");
  }, []);
  console.log("just logging");
  return (
    <div>
      <h1>x:(x)</h1>
      <button 
      onClick={()=>{
        setX((prevX) => prevX +1);
      }}
      >
        set x
      </button>
    </div>
  );
};

export default App;
