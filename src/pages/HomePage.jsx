import React from "react";
import Head from "../components/Head/Head";
import Video from "../assets/video/BGV.mp4";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Industry from "../components/Industry/Industry";
import Technos from "../components/Technos/Technos";
import Testimonial from "../components/Testimonials/Testimonial";
import Lifeat from "../components/Lifeat/Lifeat";
// import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src={Video} type="video/mp4" loop />
          Your browser does not support the video tag.
        </video>
      </div>
      <Head />
      <About />
      <Service />
      <Industry />
      <Technos />
      <Lifeat/>
      <Testimonial />

      <div className="fixed w-[50px] h-[50px] bg-[#585965] bottom-3 flex items-center justify-center left-4 rounded-full">
        <i class="fa-solid fa-mobile" style={{ color: "#fcfcfd" }}></i>
      </div>

      <div className="fixed w-[50px] bg-green-400 h-[50px] bg-[#585965] bottom-3 flex items-center justify-center right-4 rounded-full">
        <i class="fa-brands fa-whatsapp" style={{ color: "#ffffff" }}></i>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default HomePage;
