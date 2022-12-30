import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import Footer from './Footer';
function Navbar() {
    const getLogo = logo;
  return (
    <div className='Nav'>
    <Link to="/"><img className='logo' src={logo}/></Link>
      <Link to="/contact" className='Nav'>Contact</Link>
      <Link to="/Skills" className='Nav'>Skills</Link>
      <Link to="/Projects" className='Nav'>Projects</Link>
      <Link to="/Education" className='Nav'>Education</Link>
      <Link to="/Links" className='Nav'>Links</Link>
    </div>
  )
}

export default Navbar
