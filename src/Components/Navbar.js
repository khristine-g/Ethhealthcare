import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-brand">ETHCARE</div>
      <ul className="navbar-links">
      <li><Link to="/features">Features</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
       
      
        
      </ul>
    </nav>
  );
};

export default Navbar;
 