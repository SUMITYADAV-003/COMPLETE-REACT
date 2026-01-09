import React from "react";

const Iamge = () => {
  return (
    <div className="flex justify-between m-10 gap-3 ">
      <div className="">
        <h3 className="leading-[20px]">
          I'm Web Desiger <br />
          <span className="text-2xl text-[#02F273] font-bold leading-[25px]">Sumit Yadav</span>
        </h3>
        <p>Lorem ipsum dolor sit amet cmsectetur adipisicing elit. Distinctio. repellat.</p>
        <button className="px-4 bg-[#02F273] mt-3.5">Learn More</button>
      </div>
       
      <div className="">
         <img src="img1.png" alt="image" className="h-96 w-96 object-cover items-center overflow-hidden " />
      </div>
    </div>
  );
};

export default Iamge;
