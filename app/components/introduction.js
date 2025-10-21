"use client"
import React from 'react';
import { TypeAnimation } from "react-type-animation";
import VideoPlayer from './VideoPlayer';

const Introduction = () => {
  return (
    <div
      id="Homepage"
      className="hero route hero-bg"
    >
      {/* <div className="overlay-itro"></div> */}
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container intro">
            <p className="display-6 color-d">Hello I'm</p>
            <h1 className="hero-title mb-4"> Shubham Bhardwaj</h1>
            <p className="hero-subtitle">
              <TypeAnimation
                sequence={[
                  "Web Deveolper",
                  1000, 
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
          </div>
        </div>
      </div>
      <div>
        <VideoPlayer />
      </div>
    </div>
  )
};

export default Introduction;
