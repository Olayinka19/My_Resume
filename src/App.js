import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes ,Route} from'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Links from './Components/Links';
import Eduaction from './Components/Eduaction';
import Footer from './Components/Footer';
import Video from './Components/Video';


function App() {
  return (
    
    <Router>
    <NavBar />
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Video" element={<Video/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/NavBar" element={<NavBar/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/Links" element={<Links/>} />
        <Route path="/education" element={<Eduaction/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="*" element={<Link to="/">Home</Link>} />
        
      </Routes>
    
    </Router>
    
  );
}

export default App;
