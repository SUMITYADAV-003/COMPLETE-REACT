import React from "react";

const TextImage = () => {
  return (
    <div className="h-[120px] w-[183px] bg-[#1E1E1E]  px-[2] rounded-[2px] gap-2">
      <p className="uppercase text-[5px] ml-4 mt-3">About</p>
      <div className=" flex">
        <p className="uppercase text-[5px] mt-[30px] ml-3">
         <b> WHERE FASHION MEETS <br /> FREEDOM </b>
        </p>
      </div>

      <p className="text-[4px] ml-5">
        We believe that fashion should be <br />an expression of individuality. <br />We
        encourage creativity and originality <br />in every item we offer. presenting
        customers <br /> with exclusive collections from independent <br /> designers. With a
        commitment to fostering a <br />community of creativity and innovation.
      </p>
     
      

      <div className="h-[150px] w-[200px] bg-amber-700 absolute left-46 DarkImag"></div>
    </div>
  );
};

export default TextImage;
