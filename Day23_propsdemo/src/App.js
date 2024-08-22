import logo from './logo.svg';
import './App.css';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';
import VehicleComponent from './vehicle/VehicleComponent';
import VehicleDetailsComponent from './vehicle/VehicleDetailsComponent';

function App() {
  const vehicle = {
    "name" : "TVS Raider",
    "model" : "2024",
    "color" : "black"
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <HeaderComponent />
      <VehicleComponent name = "jupiter"/>
      <VehicleDetailsComponent vehicleobj = {vehicle}/>
      <FooterComponent />
    </div>
  );
}

export default App;
