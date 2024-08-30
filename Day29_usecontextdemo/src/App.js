import './App.css';
import { createContext, useState } from 'react';
import Vehicle from './components/Vehicle';
import Inventory from './components/Inventory';

export const UserContext = createContext(); // Global Storage

function App() {

  const [user, setUser] = useState("Sachin")
  return (
    <div className="App">
      <UserContext.Provider value={user}>
      <Vehicle />
      <Inventory />
      </UserContext.Provider>

    </div>
  );
}

export default App;
