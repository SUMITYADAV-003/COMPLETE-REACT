import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="img-section">
        <img src="/logo.png" alt="" />
        <div className="text-content">
          <h1> Bharat H2O <br />Solutions Private <br /> Limited  </h1>
        <p>Mumbai, Maharashtra</p> 
        <p>GST No. 27AAMCB0100DIZE</p>
        </div>
        
      </div>
      <div className="nav-routes">
        <Link to="/" className="routes1" style={{ textDecoration: 'none' }}>Home</Link>
        <Link to="/about" className="routes1" style={{ textDecoration: 'none' }}>About-us</Link>
        <Link to="/coutact" className="routes1" style={{ textDecoration: 'none' }}>Contact-us</Link>
        <Link to="/coutact" className="routes1" style={{ textDecoration: 'none' }}>  Results</Link>
        <Link to="/coutact" className="routes1" style={{ textDecoration: 'none' }}> Services</Link>
        <Link to="/coutact" className="routes1" style={{ textDecoration: 'none' }}>Pricing</Link>
        <Link to="/coutact"  style={{ textDecoration: 'none' }}><button>Get in touch</button></Link>
        
        
      </div>
     
    </div>
  );
};

export default Navbar;
