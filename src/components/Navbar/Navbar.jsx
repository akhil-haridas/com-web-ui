import React, { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-10 right-0 h-20 backdrop-blur-[10px] lg:backdrop-blur-0 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div
            className="relative block px-7 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleNav}
          >
            <p
              className={`text-4xl leading-[10px] font-extralight transform rotate-90 transition-transform ${
                isHovered
                  ? "translate-x-[8px] text-red-600"
                  : "-translate-x-[7px]"
              }`}
            >
              l
            </p>
            <p
              className={`text-4xl leading-[10px] font-extralight transform rotate-90 transition-transform ${
                isHovered
                  ? "-translate-x-[8px] text-red-600"
                  : "translate-x-[7px]"
              }`}
            >
              l
            </p>
          </div>
          <p
            className={`hidden sm:block font-custom text-12 font-300 text-base hover:text-red-600 cursor-pointer ${
              isHovered ? "text-red-600" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleNav}
          >
            MENU
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-custom font-bold">DG</p>
          <p className="font-custom lg:text-[25px] text-[18px]">
            Dignizant Technologies
          </p>
        </div>
      </div>

      {isNavOpen && (
        <div
          className="z-20 fixed top-0 left-0 w-full h-full bg-[#111223] flex flex-col items-center justify-center"
          id="navdiv"
        >
          <button
            className="absolute top-4 p-4 left-4 hover:text-white text-[#585965] text-4xl"
            onClick={toggleNav}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="flex flex-col items-center mt-16 space-y-5 mb-5 text-white">
            <a
              href="/contact"
              className="relative hover:text-white text-[#585965] text-6xl font-bold font-current"
            >
              <span className="hover:before:absolute hover:before:block hover:before:w-full hover:before:h-1 hover:before:bg-gradient-to-r from-blue-500 via-blue-300 to-pink-500 hover:before:-bottom-2">
                HOME
              </span>
            </a>

            <a
              href="/contact"
              className="relative hover:text-white text-[#585965] text-6xl font-bold font-current"
            >
              <span className="hover:before:absolute hover:before:block hover:before:w-full hover:before:h-1 hover:before:bg-gradient-to-r from-blue-500 via-blue-300 to-pink-500 hover:before:-bottom-2">
                SERVICES
              </span>
            </a>

            <a
              href="/contact"
              className="relative hover:text-white text-[#585965] text-6xl font-bold font-current"
            >
              <span className="hover:before:absolute hover:before:block hover:before:w-full hover:before:h-1 hover:before:bg-gradient-to-r from-blue-500 via-blue-300 to-pink-500 hover:before:-bottom-2">
                ABOUT
              </span>
            </a>

            <a
              href="/contact"
              className="relative hover:text-white text-[#585965] text-6xl font-bold font-current"
            >
              <span className="hover:before:absolute hover:before:block hover:before:w-full hover:before:h-1 hover:before:bg-gradient-to-r from-blue-700 via-blue-300 to-pink-500 hover:before:-bottom-2">
                CONTACT
              </span>
            </a>
          </div>

          <div className="flex space-x-8 mt-8">
            <div className="w-[50px] h-[50px] grid place-items-center bg-[#585965] cursor-pointer hover:bg-orange-600 hover:text-white rounded-full">
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div className="w-[50px] h-[50px] grid place-items-center bg-[#585965] cursor-pointer hover:bg-blue-500 hover:text-white rounded-full">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="w-[50px] h-[50px] grid place-items-center bg-[#585965] cursor-pointer hover:bg-rose-600 hover:text-white rounded-full">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
