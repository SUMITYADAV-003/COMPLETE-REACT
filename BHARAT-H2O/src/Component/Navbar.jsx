import React from "react";

const Navbar = () => {
  return (
    <div className="bg-amber-300 h-[96] w-full flex p-3">
      <img className="h-58 object-center object-cover  gap-10 rounded-2xl" src="img1.png" alt="" />
      <div className="flex flex-col justify-center gap-2 ml-3">
        <h1 className="text-3xl font-bold ">
        Bharat H2O Solutions Private Limited
      </h1> 
      <p className="text-2xl"><i class="ri-map-pin-2-fill"></i>  Mumbai, Maharashtra</p>
      <p className="text-2xl "><i class="ri-checkbox-circle-fill"></i>GST No. 27AAMCB0100DIZE</p>
      </div>
      
      <div className="flex gap-15 item-center absolute left-[1100px] justify-center items-center top-25">
        <a  className="font-semibold text-3xl uppercase bg-emerald-600 py-5 px-10 rounded-2xl hover:bg-blue-600 active:scale-95" href="#">Home</a>
        <a  className="font-semibold text-3xl uppercase bg-emerald-600 py-5 px-10 rounded-2xl hover:bg-blue-600 active:scale-95"href="#">Abount Us</a>
        <a  className="font-semibold text-3xl uppercase bg-emerald-600 py-5 px-10 rounded-2xl hover:bg-blue-600 active:scale-95"href="#">CONTACT US </a>
      </div>

      <div className="flex flex-col gap-5 absolute right-10">
        
        <button className="px-5 py-3 border-2">
          Call  07948549907 <br /> 94% Response Rate{" "}
        </button> 
        <button className="px-10 py-3 border-2 rounded text-2xl  "><i class="ri-mail-line"></i>&nbsp;Send Enquiry</button>
      </div>
    </div>
  );
};

export default Navbar;
