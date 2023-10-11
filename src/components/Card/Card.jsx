import React from "react";

const Card = ({ title, description, circleColor, logoSrc,classname, productImgSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card">
        <div className="circle" style={{ color: circleColor }}>
          <img src={logoSrc} className={`logo ${classname}`} alt="Logo" />
        </div>
        <div className="content">
          <h2 className="font-bold font-custom pt-5">{title}</h2>
          <p className="text-lg font-custom pt-2">{description}</p>
        </div>
        <img src={productImgSrc} className="product_img" alt="Product" />
      </div>
      <h1 className="title lg:pt-5 py-2 text-lg lg:text-2xl font-semibold font-custom">
        {title}
      </h1>
    </div>
  );
};

export default Card;
