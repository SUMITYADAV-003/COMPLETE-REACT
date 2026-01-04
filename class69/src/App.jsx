import React from "react";
import './style.css'
import HomeHero from "./components/HomeHero";

const App = () => {
  return (
    <div className="hero">
      <button className="button1">Home Page</button>
      <h3>
        Clean web design and intuitive user experience <br /> that reflects the club's
        dynamic spirit <br /> and premium feel.
      </h3>
      <HomeHero /> 
    </div>
    
    
  );
};

export default App;
