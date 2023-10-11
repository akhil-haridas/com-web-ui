import React from "react";
import SVG from "../../assets/svg/BG-2.svg";

const About = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-evenly text-white text-2xl bg-cover bg-bottom-[280px]"
      style={{ backgroundImage: `url("${SVG}")` }}
    >
      <div className="w-full h-full lg:h-1/3 flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center">
        <div className="py-6 px-4 lg:px-20 space-y-3 text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl tracking-wider font-bold font-current">
            <span className="tstroke">EXPERIENCE</span>
          </h1>
          <p className="text-xl lg:text-4xl tracking-wider font-bold font-current">
            <span className="text-rose-500 font-bold font-custom">12+</span>{" "}
            YEARS.
          </p>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-lg lg:text-2xl tracking-wider font-semibold font-current">
            <span className="text-rose-500 font-bold font-custom">1000+</span>{" "}
            Successful Projects Delivered
          </p>
          <p className="text-xl lg:text-2xl tracking-wider font-semibold font-sans">
            <span className="text-rose-500 font-bold font-custom">75+</span> Our
            Certified Team
          </p>
          <p className="text-xl lg:text-2xl tracking-wider font-semibold font-current">
            <span className="text-rose-500 font-bold font-custom">200+</span>{" "}
            Happy Clients Worldwide
          </p>
        </div>
      </div>
      <div className="w-full h-full flex justify-center flex-col items-center space-y-5">
        <p className="text-sm lg:text-lg text-rose-500 xl:text-xl 2xl:text-2xl tracking-wider font-semibold font-current">
          HIRE US
        </p>
        <h1 className="text-xl lg:text-2xl pl-5 xl:text-3xl 2xl:text-4xl tracking-wider font-bold font-current">
          WHY HIRE US DIGNIZANT FOR YOUR PROJECTS
        </h1>
        <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl px-5 lg:px-20 tracking-wider font-thin font-current">
          Are you looking for a reliable and experienced technology partner to
          help you with your digital transformation project? Dignizant is the
          right option. We provide industry-leading solutions to meet your
          specific business objectives with our world-class expertise and
          unparalleled services. We have a team of highly skilled and qualified
          professionals who are experts in their field and are dedicated to
          providing our clients with the best possible product.
        </p>
      </div>
    </div>
  );
};

export default About;
