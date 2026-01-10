import React from "react";
import NavBar from "./Component/NavBar";
import Iamge from "./Component/Iamge";
import LeftImge from "./Component/LeftImge";
import Card from "./Component/Card";

const App = () => {
  return (
    <div className="bg-[#121212] h-[l00vh] text-white">
      <NavBar />
      <Iamge />
      <LeftImge />
      <div className="flex justify-around ">
        <Card imagePath="/logo3.png" alt="Fist Imaeg" info1="Web Design" />
        <Card imagePath="/logo2.png" alt="Fist Imaeg" info1="UI / UX-Design" />
        <Card
          imagePath="/logo1.png"
          alt="Fist Imaeg"
          info1="Add Animations to  website"
        />
      </div>
    </div>
  );
};

export default App;
