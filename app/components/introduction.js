"use client"
import React from 'react';
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div
        id="introduction"
        className="hero route bg-image hero-bg"
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <p className="display-6 color-d">Hello I'm</p>
              <h1 className="hero-title mb-4"> Shubham Bhardwaj</h1>
              <p className="hero-subtitle">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Web Deveolper",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Web Desginer",
                    1000,
                    "Freelancer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </p>
              {/* <!-- <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> --> */}
            </div>
          </div>
        </div>
      </div>
  )
};

export default Introduction;
