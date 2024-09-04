import './App.css';
import HeaderComponent from './components/HeaderComponent.jsx';
import BodyComponent from './components/BodyComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import React from 'react';

function App() {
  return (
    <div>
      <h1>learn react</h1>
      {<HeaderComponent />}
      {<BodyComponent />}
      {<FooterComponent />}
    </div>
  );
}

export default App;
