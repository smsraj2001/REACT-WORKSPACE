import './App.css';
import Increment from './components/Increment';
import Decrement from './components/Decrement';
import Show from './components/Show';
import { createContext, useState } from 'react';

export const UserContext = createContext(); // Global Storage

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <UserContext.Provider value={{ counter, setCounter }}>
        <Increment />
        <Decrement />
        <Show />
      </UserContext.Provider>
    </div>
  );
}

export default App;
