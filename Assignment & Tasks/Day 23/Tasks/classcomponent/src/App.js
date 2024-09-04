import logo from './logo.svg';
import './App.css';
import { CalculationComponent } from './components/CalculationComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <CalculationComponent />
      <FooterComponent />
      
    </div>
  );
}

export default App;
