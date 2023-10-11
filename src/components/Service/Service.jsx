import React from 'react'
import SVG from "../../assets/svg/BG-3.svg";
import AppDev from "../../assets/image/AppDev.webp";
import WebDev from "../../assets/image/WebDev.webp";
import DigDev from "../../assets/image/DigDev.webp";
import UiUxDev from "../../assets/image/UiUxDev.webp";
import Card from '../Card/Card';
const Service = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-evenly text-white text-2xl bg-cover bg-bottom-[280px]"
      style={{ backgroundImage: `url("${SVG}")` }}
    >
      <div className="w-full h-full flex justify-center flex-col items-center space-y-5">
        <p className="text-sm text-rose-500 lg:text-lg xl:text-xl 2xl:text-2xl tracking-wider font-semibold font-current">
          WHAT WE OFFER
        </p>
        <h1 className="text-xl lg:text-2xl pl-5 xl:text-3xl 2xl:text-4xl tracking-wider font-bold font-current">
          WE OFFER YOU ALL SERVICES OF TECHNOLOGY
        </h1>
      </div>
      <div className="w-full h-full lg:h-1/3 flex flex-col lg:flex-row items-center justify-evenly">
        <Card
          title="Web Development"
          description="We have worked with businesses of all sizes to develop web development solutions that meet their specific requirements. Our talented team has vast design and development experience."
          circleColor="#f40103"
          logoSrc={WebDev}
          productImgSrc={WebDev}
        />
        <Card
          title="Mobile App Development"
          description="We develop mobile apps with your business in mind. We specialize in creating innovative and user-friendly mobile applications for iOS and Android platforms."
          circleColor="#f40103"
          logoSrc={AppDev}
          productImgSrc={AppDev}
        />
        <Card
          title="Digital Marketing"
          description="We provide digital marketing services to help your business grow quickly. We have a team of marketing specialists who have experience in marketing and advertising experience."
          circleColor="#f40103"
          logoSrc={DigDev}
          productImgSrc={DigDev}
        />
        <Card
          title="UI/UX Design"
          description="We have extensive experience in designing and developing innovative user interfaces and user experiences. We’ve worked on numerous projects, including mobile apps and websites."
          circleColor="#f40103"
          logoSrc={UiUxDev}
          productImgSrc={UiUxDev}
        />
      </div>
    </div>
  );
}

export default Service