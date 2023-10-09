import React from "react";
import SVG from "../../assets/svg/BG-2.svg";

const About = () => {
  return (
    <div
      className="w-full min-h-screen space-y-5 flex flex-col items-center justify-evenly text-white text-2xl bg-cover bg-bottom-[280px]"
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
      <div className="w-full h-full lg:h-1/3 flex flex-col pt-20 lg:flex-row items-center justify-evenly">
        <div className="card">
          <div className="circle" style={{ color: "#f40103" }}>
            <i
              class="fa-solid fa-computer"
              className="logo"
              style={{ color: "#ffffff" }}
            ></i>
            <i class="fa-solid fa-mobile"></i>
          </div>
          <div className="content">
            <h2>CocoCola</h2>
            <p>
              CocoCola is a refreshing beverage that quenches your thirst and
              tantalizes your taste buds. <br />
              Our secret blend of flavors.
            </p>
            <a href="#">Explore More</a>
          </div>
          <img
            src="https://drive.google.com/uc?export=view&id=1ly_grxitjKviI85yrLUw-cznk1TGg2M2"
            className="product_img"
          />
        </div>
        <div className="card">
          <div className="circle" style={{ color: "#f40103" }}>
            <img
              src="https://drive.google.com/uc?export=view&id=1m4XceTGeiuvdoEkiWQX4Il5nYtAH8tRw"
              className="logo"
            />
          </div>
          <div className="content">
            <h2>CocoCola</h2>
            <p>
              CocoCola is a refreshing beverage that quenches your thirst and
              tantalizes your taste buds. <br />
              Our secret blend of flavors.
            </p>
          </div>
          <img
            src="https://drive.google.com/uc?export=view&id=1ly_grxitjKviI85yrLUw-cznk1TGg2M2"
            className="product_img"
          />
        </div>
        <div className="card">
          <div className="circle" style={{ color: "#f40103" }}>
            <img
              src="https://drive.google.com/uc?export=view&id=1m4XceTGeiuvdoEkiWQX4Il5nYtAH8tRw"
              className="logo"
            />
          </div>
          <div className="content">
            <h2>CocoCola</h2>
            <p>
              CocoCola is a refreshing beverage that quenches your thirst and
              tantalizes your taste buds. <br />
              Our secret blend of flavors.
            </p>
            <a href="#">Explore More</a>
          </div>
          <img
            src="https://drive.google.com/uc?export=view&id=1ly_grxitjKviI85yrLUw-cznk1TGg2M2"
            className="product_img"
          />
        </div>
        <div className="card">
          <div className="circle" style={{ color: "#f40103" }}>
            <img
              src="https://www.pngfind.com/pngs/m/170-1706361_web-development-icon-web-development-logo-png-transparent.png"
              className="logo"
            />
          </div>
          <div className="content">
            <h2>CocoCola</h2>
            <p>
              CocoCola is a refreshing beverage that quenches your thirst and
              tantalizes your taste buds. <br />
              Our secret blend of flavors.
            </p>
            <a href="#">Explore More</a>
          </div>
          <img
            src="https://drive.google.com/uc?export=view&id=1ly_grxitjKviI85yrLUw-cznk1TGg2M2"
            className="product_img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
