import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import EmpListing from './employee-component/EmpListing';
import EmpCreate from './employee-component/EmpCreate';
import EmpDetail from './employee-component/EmpDetail';
import EmpEdit from './employee-component/EmpEdit';

  function App() {
    return (
      <div className="App">

        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>

      </div>
    );
  }

export default App;
