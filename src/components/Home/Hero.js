import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc , tittle }) => {
  return (
    <div className="hero animate__animated animate__fadeIn">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <h1 className="hero__title">{tittle}</h1>
    </div>
  );
};

export default Hero;
