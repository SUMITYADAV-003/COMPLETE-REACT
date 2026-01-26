import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="img-section">
        <img src="/img1.png" alt="" />
        <div className="text-content">
          <h1> Bharat H2O Solutions Private Limited  </h1>
        <p>Mumbai, Maharashtra</p> 
        <p>GST No. 27AAMCB0100DIZE</p>
        </div>
        
      </div>
      <div className="nav-routes">
        <Link to="/" className="routes1" style={{ textDecoration: 'none' }}>Home</Link>
        <Link to="/about" className="routes1" style={{ textDecoration: 'none' }}>About-us</Link>
        <Link to="/coutact" className="routes1" style={{ textDecoration: 'none' }}>Contact-us</Link>
         <div className="mange-btn">
          <button className="btn">Call <br /> 07948549907 <br />92% Response Rate </button><br />
          <button className="btn1" >Send Enquire</button>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
