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


// const App =()=>{
//   const [x, setX] = useState(0);
//   useEffect( () =>{
//     console.log("after render");
//   }, []);
//   console.log("just logging");
//   return (
//     <div>
//       <h1>x:(x)</h1>
//       <button 
//       onClick={()=>{
//         setX((prevX) => prevX +1);
//       }}
//       >
//         set x
//       </button>
//     </div>
//   );
// };

const generationUsers = ()=>[
  {id:1, name:"keti"},
  {id:2, name:"natia"},
  {id:3, name:"tatia"},
  {id:4, name:"ana"},
  {id:5, name:"salome"},
  {id:6, name:"giorgi"},
  {id:7, name:"dato"},
  {id:8, name:"nika"},
  {id:9, name:"luka"},
  {id:10, name:"avto"},
];

const App =()=>{
  const [users, setUsers]=useState([]);

  useEffect (()=>{
    setUsers(generationUsers());
  }, []);

  useEffect (()=>{
    document.title =`${users.length} users left`;
  }, [users]);

  const onDeleteUser =()=>{
    const randomIndex = Math.floor(Math.random() * users.length);
    setUsers((prevUsers)=>{
      const newUsersArray = prevUsers.filter(
        (_, index)=> index!==randomIndex
      );
      return newUsersArray
    })
  }

  return (
    <div>
      {users.map((user)=> (
        <React.Fragment key={user.id}>
      <h1 >{user.name} </h1>
      </React.Fragment>
      ))}
         <button onClick={onDeleteUser}> delete user</button>
    </div>
  );
}


export default App;
