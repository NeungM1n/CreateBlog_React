import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import "./App.css"
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import SignUp from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <br/>
        <Value />
        <Residencies />
        <Contact />
        <GetStarted />
      </div>
  );
}

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App; 