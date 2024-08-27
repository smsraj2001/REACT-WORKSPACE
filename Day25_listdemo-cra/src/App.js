import { useState } from 'react';
import './App.css';

function App() {
  const [fruits, setFruits] = useState(["apple", "mango", "banana"]);
  const [vehicle, setVehicle] = useState([
    { id: 1, name: "Jupiter", model: "2024" },
    { id: 2, name: "Raider", model: "2022" },
    { id: 3, name: "Apache", model: "2023" }
  ]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedVehicles = [...vehicle].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setVehicle(sortedVehicles);
    setSortConfig({ key, direction });
  };

  // Adding new fruits
  if (fruits.length === 3) {
    fruits.push("grapes");
    fruits.push("watermelon");
  }

  return (
    <div className='App'>
      <p>Length of fruits array: {fruits.length}</p>

      <p>Iterate all the elements</p>
      {fruits.map((data, index) => (
        <p key={index}>Value of fruits: {data}</p>
      ))}

      <hr />

      <h2>Vehicles</h2>
      {vehicle.map((data) => (
        <p key={data.id}>{data.id} {data.name} {data.model}</p>
      ))}

      <hr />

      <h2>Iterate with index</h2>
      {vehicle.map((data, index) => (
        <p key={data.id}> {index} {data.id} {data.name} {data.model} </p>
      ))}

      <hr />
      <h2>Display Table with Sorting</h2>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" onClick={() => handleSort('id')}>ID</th>
              <th scope="col" onClick={() => handleSort('name')}>Name</th>
              <th scope="col" onClick={() => handleSort('model')}>Model</th>
            </tr>
          </thead>
          <tbody>
            {vehicle.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import {useState} from 'react';
 
 
 
// function App() {
 
//   let fruits=["apple","mango","banana"];
 
//   let vehicle=[  
//     {id:2,name:"jupiter",model:"2024"},
//     {id:1,name:"raider",model:"2022"},
//     {id:3,name:"apache",model:"2023"}, 
//   ]
 
//   const [sorting, setSorting] = useState({ field: 'name', ascending: false })
 
//   const sortedVehicle = [...vehicle].sort((a, b) => {
//     if (a[sorting.key] < b[sorting.key]) return sorting.ascending ? -1 : 1;
//     if (a[sorting.key] > b[sorting.key]) return sorting.ascending ? 1 : -1;
//     return 0;
//   });
 
//   function applySorting(key, ascending) {
//     setSorting({ key: key, ascending: ascending });
//   }
 
 
//   return (
//     <div className="App">
   
//      <p>length of fruits array {fruits.length}</p>
   
//      {fruits.push('grape')}
//      {fruits.push('watermelon')}
 
//      <p>length of fruits array {fruits.length}</p>
 
// <hr/>
 
//     { fruits.map( (data)=>(
//       <p>Value of fruits {data}</p>
//     ) )}    
 
//   <hr/>
 
//     {
//       vehicle.map((data)=>(
//         <p>{data.id} {data.name} {data.model}</p>
//       ))
//     }
// <hr/>
//     <h2>iterate with index</h2>
 
//     {
//       vehicle.map((data,index)=>
//       <p>{index} {data.id}{data.name}{data.model} </p>
//     )
//     }
 
// <hr/>
 
// <table className="table table-sm table-bordered table-hover table table-striped">
//   <thead>
//     <tr>
//       <th scope="col" onClick={()=>applySorting('id',!sorting.ascending)}> ID </th>
//       <th scope="col" onClick={()=>applySorting('name',!sorting.ascending)}> NAME </th>
//       <th scope="col" onClick={()=>applySorting('model',!sorting.ascending)}> MODEL </th>
//     </tr>
//   </thead>
//   <tbody>
//   {
//       sortedVehicle.map((data)=>
//       <tr>
//       <td>{data.id}</td>
//       <td>{data.name}</td>
//       <td>{data.model}</td>
//       </tr>
//     )
//     }
//   </tbody>
// </table>
 
//     </div>
//   );
// }
 
// export default App;