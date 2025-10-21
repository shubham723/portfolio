"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

// Variants for each word.

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};


const About = () => {
  const text = "ABOUT ME";
  const words = text.split(" ");
  return (
    <section
      id="About"
      className="about-mf sect-pt4 route flex place-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">

              <div className="row">
                <motion.div className="title-box-2 flex justify-center"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <h5 className="title-left">
                    {words.map((word, index) => (
                      <motion.span
                        variants={child}
                        style={{ marginRight: "5px" }}
                        className={`word-${index}`}
                        key={index}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </h5>
                </motion.div>
                <span class="title-bg">Resume</span>
              </div>

              <div className="flex md:flex-row flex-col">
                <div className="w-full md:w-1/2 about-first">
                  <div className="custom-title">
                    Personal Info
                  </div>
                  <div className="about-img-wrapper">
                    <div className="about-img-container">
                      <img
                        src="/assets/img/shubham-3.png"
                        className="b-shadow-a profile-pic"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <ul class="about-list list-unstyled open-sans-font">
                      <li>
                        <span class="title">
                          first name:
                        </span>
                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                          Shubham
                        </span>
                      </li>
                      <li>
                        <span class="title">
                          last name:
                        </span>
                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                          Bhardwaj
                        </span>
                      </li>
                      <li>
                        <span class="title">Freelance: </span>
                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block green">
                          Available
                        </span>
                      </li>

                      <li>
                        <span class="title">Nationality: </span>
                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                          Indian
                        </span>
                      </li>
                      {/* <li>
                        <span class="title">phone: </span>
                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                          +918054296478</span>
                      </li>
                      <li>
                        <span class="title">Email: </span>
                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                          sshubham7774@mail.com</span>
                      </li> */}
                      <li>
                        <span class="title">langages: </span>
                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">
                          English
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 mt-1 download-cv resume">
                    <div className="button">
                      <div className="down">
                        <span className="button-text ms-2">
                          Download CV
                        </span>
                        <FaArrowRight className="ms-2" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML, CSS, JavaScript</span>
                    <span className="pull-right"></span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>REACT</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>NODE</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "92%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>NEXT</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>AWS</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>MYSQL</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>MongoDB</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>TypeScript</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div> */}
                </div>
                <div className="w-full md:w-1/2 about-second">
                  <div className="about-me pt-4 pt-md-0">
                    <h2 className="caption-head">
                      Shaping the Future with Purpose, Culture, and Innovation
                    </h2>
                    <div className="info-detail">
                      <p>
                        I help startups, small businesses, and entrepreneurs build full-stack web
                        applications tailored to their unique goal. Whether
                        you're launching a new product, automating a manual process, or enhancing user
                        experience, I deliver fast, secure, and scalable solutions. From API integrations and real-time features to responsive UI/UX and
                        clean backend architecture — I focus on delivering exactly what your project needs to
                        succeed.
                      </p>
                      <p>
                        If you're looking for a reliable developer who understands both code and
                        client goals, let's connect. I’m open to short- or long-term freelance work and
                        would love to discuss how we can bring your idea to life. <span className="lead-span"> Let’s build something
                          great together → </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
