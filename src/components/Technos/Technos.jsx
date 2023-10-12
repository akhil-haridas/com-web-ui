import React from "react";

// Import images
import REACTJS from "../../assets/image/react.webp";
import ANGULAR from "../../assets/image/angular.webp";
import FLUTTER from "../../assets/image/flutter.webp";
import HTML from "../../assets/image/html.webp";
import IOS from "../../assets/image/ios.webp";
import JAVA from "../../assets/image/java.webp";
import PYTHON from "../../assets/image/python.webp";
import KOTLIN from "../../assets/image/kotlin.webp";
import VUE from "../../assets/image/vue.webp";
import LARAVEL from "../../assets/image/laravel.webp";
import PHP from "../../assets/image/php.webp";
import WORDPRESS from "../../assets/image/wordpress.webp";

// Define an object to map image keys to tag names
const imageMap = {
  REACT: REACTJS,
  ANGULAR: ANGULAR,
  FLUTTER: FLUTTER,
  HTML: HTML,
  IOS: IOS,
  JAVA: JAVA,
  PYTHON: PYTHON,
  KOTLIN: KOTLIN,
  VUE: VUE,
  LARAVEL: LARAVEL,
  PHP: PHP,
  WORDPRESS: WORDPRESS,
};

const TAGS = Object.keys(imageMap);
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 10;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ tag }) => {
  const imagePath = imageMap[tag] || "";

  return (
    <div className="tag flex flex-col">
      <img
        src={imagePath}
        className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px]"
        alt={tag}
      />
      <span className="font-custom font-semibold pt-3 text-center">{tag}</span>
    </div>
  );
};

const Technos = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-evenly text-white text-2xl bg-cover bg-bottom-[280px] bg-[#111223]">
      <div className="h-full flex justify-center flex-col items-center space-y-7">
        <p className="text-sm lg:text-lg text-rose-500 xl:text-xl 2xl:text-2xl tracking-wider font-semibold font-current">
          OUR EXPERTISE
        </p>
        <h1 className="text-xl lg:px-10 lg:text-2xl xl:text-3xl 2xl:text-4xl text-center tracking-wider font-bold font-current">
          TECHNOLOGY STACKS
        </h1>
        <div className="tag-list">
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={i % 2}
            >
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <Tag tag={tag} key={tag} />
                ))}
            </InfiniteLoopSlider>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Technos;
