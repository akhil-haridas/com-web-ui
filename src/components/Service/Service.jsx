import React from 'react'
import SVG from "../../assets/svg/BG-3.svg";
const Service = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center text-white text-2xl bg-cover bg-bottom-[280px]"
      style={{ backgroundImage: `url("${SVG}")` }}
    >
      Section 3 Content
    </div>
  );
}

export default Service