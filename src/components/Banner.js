import React from "react";
import "../styles/Banner.css";
import Recommendation from "./Recommendation";
function Banner() {
  return (
    <header>
      <div className="head">
        <img className="logo" src="./images/logo.png" alt="logo" />
        <h1>La maison des plantes</h1>
      </div>
      <div className="recommendation">
        <Recommendation />
      </div>
    </header>
  );
}

export default Banner;
