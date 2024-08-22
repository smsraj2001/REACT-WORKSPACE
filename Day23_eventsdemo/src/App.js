import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/CounterComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CalculationComponent from './components/CalculationComponent';

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <CounterComponent />
      <CalculationComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
