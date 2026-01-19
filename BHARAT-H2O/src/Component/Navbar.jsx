import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full p-3 md:p-6">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
        
        {/* Logo and Company Info */}
        <div className="flex gap-3">
          <img 
            className=" h-40 w-30   object-cover abject-center rounded-2xl flex-shrink-0" 
            src="img1.png" 
            alt="Company Logo" 
          />
          <div className="flex flex-col justify-center gap-1 md:gap-2">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
              Bharat H2O Solutions Private Limited
            </h1> 
            <p className="text-sm md:text-lg lg:text-xl">
              <i className="ri-map-pin-2-fill"></i> Mumbai, Maharashtra
            </p>
            <p className="text-sm md:text-lg lg:text-xl">
              <i className="ri-checkbox-circle-fill"></i> GST No. 27AAMCB0100DIZE
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex gap-5 items-center ml-auto p-15">
          <a className="text-lg  uppercase py-3 px-6 rounded-2xl hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer transition-all" href="#">
            Home
          </a>
          <a className="text-lg  uppercase py-3 px-6 rounded-2xl hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer transition-all" href="#">
            About Us
          </a>
          <a className="text-lg  uppercase py-3 px-6 rounded-2xl hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer transition-all" href="#">
            Contact Us
          </a>
        </div>

        {/* Contact Buttons - Desktop */}
        <div className="hidden md:flex flex-col gap-3 ml-auto xl:ml-4">
          <button className="px-6 py-2 border-2 rounded text-base lg:text-lg border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all whitespace-nowrap">
            Call 07948549907 <br /> 
            <span className="text-sm">94% Response Rate</span>
          </button> 
          <button className="px-6 py-2 border-2 rounded text-base lg:text-lg text-white bg-blue-600 hover:bg-blue-700 transition-all whitespace-nowrap">
            <i className="ri-mail-line"></i>&nbsp;Send Enquiry
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-auto p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`text-3xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 border-t pt-4">
          <a className="text-base uppercase py-3 px-4 rounded-lg hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer transition-all text-center" href="#">
            Home
          </a>
          <a className="text-base uppercase py-3 px-4 rounded-lg hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer transition-all text-center" href="#">
            About Us
          </a>
          <a className="text-base uppercase py-3 px-4 rounded-lg hover:bg-blue-600 hover:text-white active:scale-95 cursor-pointer transition-all text-center" href="#">
            Contact Us
          </a>
          
          {/* Mobile Contact Buttons */}
          <button className="px-6 py-3 border-2 rounded text-base border-blue-600 text-blue-600 font-semibold">
            Call 07948549907 <br /> 
            <span className="text-sm">94% Response Rate</span>
          </button> 
          <button className="px-6 py-3 border-2 rounded text-base text-white bg-blue-600 hover:shadow-black">
            <i className="ri-mail-line"></i>&nbsp;Send Enquiry
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;