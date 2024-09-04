import { createContext, useState } from 'react';
import Increment from './components/Increment';
import Decrement from './components/Decrement';
import Show from './components/Show';

export const UserContext = createContext(); //context object for global store

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    return setCounter(counter + 1);
  }


  const decrement = () => {
    return setCounter(counter - 1);
  }

  return (
    <div className="App">

      <UserContext.Provider value={{ counter, increment, decrement }}>
        <Increment />
        <br />
        <Decrement />
        <Show />

      </UserContext.Provider>
    </div>
  );
}

export default App;
