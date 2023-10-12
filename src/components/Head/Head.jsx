import React from "react";
import SVG from "../../assets/svg/BG-1.svg";
import Desktop from "../../assets/image/Desktop.png";
import Navbar from "../Navbar/Navbar";

const Head = () => {
  return (
    <>
      <div
        className="w-full  min-h-screen flex text-white text-2xl bg-cover bg-bottom-[280px]"
        style={{ backgroundImage: `url("${SVG}")` }}
      >
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center items-center w-full h-screen">
          <div className="w-full lg:w-[60%] pt-[8rem] lg:pt-[4rem] lg:mt-0 flex h-full items-center">
            <div className="space-y-2 w-full pl-4 lg:pl-20 flex flex-col items-start">
              <p className="text-xl lg:text-2xl tracking-wider font-semibold font-current">
                WE TRANSFORM IDEAS INTO ACTION
              </p>
              <h1 className="text-4xl lg:text-7xl tracking-wider font-bold font-current">
                FUTURE
              </h1>
              <h1 className="text-4xl lg:text-7xl tracking-wider font-bold font-current">
                SOFTWARE AND <span className="tstroke">TECHNOLOGY</span>
              </h1>

              <h1 className="text-4xl lg:text-7xl tracking-wider font-bold font-current">
                DEVELOPMENT
                <span className="text-4xl lg:text-7xl pb-1 lg:pb-3 tracking-wider font-bold font-current text-rose-500">
                  .
                </span>
              </h1>

              <p className="text-xl">
                Fuel growth through digital transformation with us.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%] mt-4 lg:mt-0 flex h-full items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src={Desktop}
                alt="Desktop"
                className="w-2/3 h-auto lg:pt-10 lg:w-[70%]"
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="circles z-0 fixed bottom-0 left-0 w-full">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </>
  );
};

export default Head;
