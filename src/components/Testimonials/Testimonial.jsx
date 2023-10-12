import React, { useEffect, useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import Splitting from "splitting";


const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className="cardc">
    <h2>{title}</h2>
    <p>{content}</p>
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
          className="card-container"
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

const Testimonial = () => {
  useEffect(() => {
    // Initialize Splitting.js
    Splitting();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-evenly text-white text-2xl bg-cover bg-bottom-[280px] bg-[#111223]">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-screen">
        <div className="w-full lg:w-[40%] pt-20 pl-20 mt-4 lg:mt-0 flex h-full items-center justify-center">
          <div className="flex absolute items-center justify-center">
            <div className="ball" data-splitting="">
              <div className="ball-top" />
            </div>
            <div className="phrase" data-splitting="items">
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
        <div className="w-full justify-center pt-[8rem] lg:pt-[4rem] lg:mt-0 flex h-full items-center">
          <Carousel>
            {[...new Array(CARDS)].map((_, i) => (
              <Card
                title={"Card " + (i + 1)}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
