import React, { useEffect, useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import Splitting from "splitting";

const cardData = [
  {
    title: "Our Core Competence",
    content:
      "Our competence lies in our ability to consistently deliver high-quality products and services to our clients. We have a team of skilled professionals who are experts in their respective fields, and we leverage the latest technology and industry best practices to provide customized solutions that fulfill the particular requirements of each of our clients.",
  },
  {
    title: "Agile Approach",
    content:
      "At our company, we follow an agile approach to project management,  which allows us to respond quickly to changing client needs and deliver products and services that exceed expectations. We believe in collaboration, communication, and flexibility, and our agile methodology enables us to deliver projects on time and within budget.",
  },
  {
    title: "Our Commitment",
    content:
      "Our commitment to our clients is to always put their needs first and provide them with the best possible solutions. We are committed to delivering exceptional customer service and long-term relationships with our clients based on trust and mutual respect. ",
  },
  {
    title: "Our Operational Procedure",
    content:
      "Our process is designed to ensure that we deliver high-quality products and services that meet our clients unique needs. We begin by conducting a thorough analysis of the client’s requirements, followed by a detailed project plan that outlines the timeline, budget, and deliverables.",
  },
  {
    title: "Best Workspace Enviroment",
    content:
      "Our company is dedicated to creating a positive and supportive work environment for our employees. We believe that happy employees are more productive and engaged. We offer our employees a variety of benefits and perks, including flexible working hours, professional development opportunities and a supportive culture.",
  },
];

const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className="cardc w-full lg:h-full h-[80%]">
    <h2 className="text-xl font-bold font-custom lg:pb-2 lg:text-2xl xl:text-3xl">
      {title}
    </h2>
    <p className="text-xs text-semibold font-custom lg:text-base xl:text-lg">
      {content}
    </p>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container lg:w-full w-[50%]"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const Values = () => {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-evenly text-white text-2xl bg-cover bg-bottom-[280px] bg-[#111223]">
      <div className="w-full h-full flex justify-center flex-col items-center space-y-5">
        <p className="text-sm text-rose-500 lg:text-lg xl:text-xl 2xl:text-2xl tracking-wider font-semibold font-current">
          OUR CORE VALUES & BUSINESS PHILOSOPHY
        </p>
        <h1 className="text-xl lg:text-2xl text-center pb-5 xl:text-3xl 2xl:text-4xl tracking-wider font-bold font-current">
          BETTER FUTURE WITH OUR CORE VALUES AND ACHIEVE FULL POTENTIAL
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-screen">
        <div className="w-full lg:w-[40%] lg:pt-20 lg:pl-20 lg:mr-0 mr-20 mt-4 lg:mt-0 flex h-full items-center justify-center">
          <div className="flex absolute items-center justify-center">
            <div className="ball" data-splitting="">
              <div className="ball-top" />
            </div>
            <div className="phrase w-full" data-splitting="items">
              <span className="word slide" data-splitting="chars">
                EXCELLENCE
              </span>
              <span className="word slide" data-splitting="chars">
                TRANSPARENCY & INTEGRITY
              </span>
              <span className="word slide" data-splitting="chars">
                INNOVATION
              </span>
              <span className="word slide" data-splitting="chars">
                COLLABORATION
              </span>
              <span className="word slide" data-splitting="chars">
                ACCOUNTABILITY
              </span>
            </div>
          </div>
        </div>
        <div className="w-full justify-center lg:pb-0 pb-[5rem] lg:pt-[4rem] lg:mt-0 flex h-full items-center">
          <Carousel>
            {cardData.map((data, i) => (
              <Card key={i} title={data.title} content={data.content} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Values;
