import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import UserForm from './components/UserForm';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <UserForm />
      <FooterComponent />
    </div>
  );
}

export default App;
