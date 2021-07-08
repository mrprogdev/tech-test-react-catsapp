import React from "react";
import CatSatLogo from "../../../svg/CatSatLogo";
import splashStyle from "./SplashScreen.module.css";

export const LoadingSplash = () => {
  return (
    <div className={splashStyle.container}>
      <CatSatLogo fill="#A88E74" />
      <p className={splashStyle.title}>CatSat</p>
    </div>
  );
};

const splashScreen = () => {
  return <div></div>;
};

export default splashScreen;
