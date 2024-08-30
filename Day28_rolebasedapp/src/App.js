import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import ProtectedRoute from './routeconfig/ProtectedRoute';
import Products from './components/Products';
import Admin from './components/Admin';
import User from './components/User';


function App() {
  let getUserRole = () =>
  {
    const user = localStorage.getItem("user");
    const u = JSON.parse(user);
    console.log(`Role is ${u.role}`)
    return u.role;
  }

  const mycurrentrole = getUserRole();
  // alert(mycurrentrole)
  return (
    <div className="App">
      <Routes>
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
        </Route> */}
        
        <Route path="/login" element={<Login />} />
        <Route path = "/" element = {<Home />} />
        <Route path = "/admin" element = {mycurrentrole === "admin" ? <> <Admin />  </> : <h1>Only admin can access this page</h1>} />
        <Route path = "/user" element = {mycurrentrole === "user" ? <User /> : <h1>Only user can access this page</h1>} />
        <Route path="/contactus" element={mycurrentrole === "user" || mycurrentrole === "admin" ? <ContactUs/ > : <h1>Not accessible</h1>} />
        <Route path="/aboutus" element={mycurrentrole === "user" || mycurrentrole === "admin" ? <AboutUs/ > : <h1>Not accessible</h1>} />
        <Route path = "*" element = { <h1>Page Not Found</h1>} />

        {/* Redirect from the root path to the login page */}
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
      </Routes>
    </div>
  );
}

export default App;
