import React from "react";

import "./Hero.css";
import Header from "src/components/header/Header";
import Form from "./Form";
import Info from "./Info";

function Hero() {
  return (
    <div className="hero">
      <div style={{ height: "50px", width: "100%" }}></div>
      <div className="rounded-4 px-6 sticky-top">
        <Header bgColor={true} />
      </div>
      <div className="row mt-5 px-6">
        <div className="col-6 mt-4">
          <Info />
        </div>
        <div className="col-6">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Hero;
