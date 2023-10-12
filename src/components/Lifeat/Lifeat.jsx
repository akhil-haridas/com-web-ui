import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const imageUrls = [
  "https://api.dignizant.com/src/upload/bfa5c1d9-e04c-43fb-9e08-69d9f98d7d18_1692163681632.webp",
  "https://api.dignizant.com/src/upload/4e8d154e-7831-4766-887f-f785ede35b7b_1692163695223.webp",
  "https://api.dignizant.com/src/upload/a7a9db21-e2c0-4c60-9106-21fbcd553102_1692163668197.webp",
  "https://api.dignizant.com/src/upload/be8a752a-da32-4f65-bab5-64ec52c5608d_1692163701171.webp",
  "https://api.dignizant.com/src/upload/e00d1cb0-dd0b-464d-b596-a701e4f6e797_1692163636621.webp",
  "https://api.dignizant.com/src/upload/ecc7c29e-c45d-4a77-81e8-ce5c930a1720_1692163651362.webp",
  "https://api.dignizant.com/src/upload/720bc4ab-dfdc-43b8-b09b-7cfa81e6b2ca_1692163642558.webp",
  "https://api.dignizant.com/src/upload/3c107bb7-0d36-4267-94a1-f6f721b86d02_1692163676023.webp",
  "https://api.dignizant.com/src/upload/dd353245-2f8d-4344-9e5c-d79ca3174cbd_1692163659972.webp",
  "https://api.dignizant.com/src/upload/8444165d-edab-40e9-9bab-6d8d04c0e699_1692163706960.webp",
];

const isMobile = window.innerWidth <= 768;

const Lifeat = () => {
  const [clickedItems, setClickedItems] = useState(Array(10).fill(false));

  useEffect(() => {
    gsap.to(".item", {
      width: (index) =>
        clickedItems[index]
          ? isMobile
            ? "80vw"
            : "40vw"
          : isMobile
          ? "13vw"
          : "8vw",
      duration: 2.5,
      ease: "elastic(1, .3)",
    });
  }, [clickedItems]);

  const expand = (i) => {
    setClickedItems((prevItems) =>
      prevItems.map((item, index) => (i === index ? !item : false))
    );
  };

  return (
    <div className="w-full overflow-hidden min-h-screen space-y-10 flex flex-col items-center justify-center text-white text-2xl bg-cover bg-bottom-[280px] bg-[#111223]">
      <div className="w-full h-full flex justify-center flex-col items-center space-y-5">
        <p className="text-sm text-rose-500 lg:text-lg xl:text-xl 2xl:text-2xl tracking-wider font-semibold font-current">
          COMPANY
        </p>
        <h1 className="text-xl lg:text-2xl text-center px-2 xl:text-3xl 2xl:text-4xl tracking-wider font-bold font-current">
          LIFE @ DIGNIZANT TECHNOLOGIES
        </h1>
      </div>
      {window.innerWidth <= 768 ? (
        <>
          <div className="group">
            {imageUrls.slice(0, 5).map((url, i) => (
              <div
                className={`item ${clickedItems[i] ? "expanded" : ""}`}
                key={i}
                onClick={() => expand(i)}
                style={{
                  backgroundImage: `url(${url})`,
                }}
              />
            ))}
          </div>
          <div className="group">
            {imageUrls.slice(5, 10).map((url, i) => (
              <div
                className={`item ${clickedItems[i + 4] ? "expanded" : ""}`}
                key={i + 4}
                onClick={() => expand(i + 5)}
                style={{
                  backgroundImage: `url(${url})`,
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="group">
          {imageUrls.map((url, i) => (
            <div
              className={`item ${clickedItems[i] ? "expanded" : ""}`}
              key={i}
              onMouseEnter={() => expand(i)}
              onMouseLeave={() => expand(i)}
              style={{
                backgroundImage: `url(${url})`,
              }}
            />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Lifeat;
