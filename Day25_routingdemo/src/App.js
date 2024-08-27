import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {Route, Routes} from "react-router-dom"
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      {/* <h1> Routing Demo</h1>
      {console.log("Routing Demo")} */}

      <Routes>
        <Route path = "/" element = {<Home />} /> {/* Default path */}
        {/* In the URL append /home, then the component will come. */}
        {/* <Route path = "/home" element = {<Home />} />  */}
        <Route path = "/contactus" element = {<ContactUs />} />
        <Route path = "/aboutus" element = {<AboutUs />} />
      </Routes>

    </div>
  );
}

export default App;
