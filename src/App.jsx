import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './Component/Footer'
import LandingPage from './Component/LandingPage'
import Navbar from './Component/Navbar'
import LoginPage from "./Login/login";
import SignupPage from "./Singup/Signup";
import Dashboard from "./Component/Dashboard";
import ProtectRoute from "./Component/ProtectRoute";


function App() {

  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <LandingPage />
          <Footer/>
        </> }/>
      {/* Navigation Menu */}
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
    
        
      </Routes>
    </Router>
    </>
  )
}

export default App
