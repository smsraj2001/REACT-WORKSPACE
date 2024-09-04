import './App.css';
import HeaderComponent from './components/HeaderComponent'; // Import HeaderComponent
import BodyComponent from './components/BodyComponent'; // Import BodyComponent
import CommonComponent from './components/CommonComponent'; // Import CommonComponent

function App() {
  return (
    <div className="App">
      <h1>learn react</h1>

      {<HeaderComponent />}

      {<BodyComponent />}

      {<CommonComponent />}
    </div>
  );
}

export default App;
