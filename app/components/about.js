"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


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
  const text = "About me";
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
              <div className="flex md:flex-row flex-col">
                <div className="w-full md:w-1/2">
                  <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
                    <div className="">
                      <div className="about-img">
                        <img
                          src="/assets/img/shubham-3.png"
                          className="rounded b-shadow-a profile-pic"
                          alt="Profile Picture"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span>Shubham Bhardwaj</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span>Full stack developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span>sshubham7774@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span>+91 8054296478</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML, CSS, JavaScript</span>
                    {/* <span className="pull-right"></span> */}
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
                    {/* <span className="pull-right">95%</span> */}
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
                    {/* <span className="pull-right">95%</span> */}
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
                    {/* <span className="pull-right">95%</span> */}
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
                    {/* <span className="pull-right">85%</span> */}
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
                    {/* <span className="pull-right">90%</span> */}
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
                    {/* <span className="pull-right">90%</span> */}
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
                    {/* <span className="pull-right">90%</span> */}
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
                  </div>
                </div>
                <div className="w-full md:w-1/2 ml-5">
                  <div className="about-me pt-4 pt-md-0">
                    <motion.div className="title-box-2"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                    >
                      <h5 className="title-left">
                        {words.map((word, index) => (
                          <motion.span
                            variants={child}
                            style={{ marginRight: "5px" }}
                            key={index}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </h5>
                    </motion.div>
                    <p className="lead">
                      I take pride in showcasing myself as a
                      web developer who not only possesses technical expertise
                      but also values the personal touch in my work. I believe
                      that a website should not only look visually appealing but
                      also reflect the personality and goals of the individual
                      or business it represents.
                    </p>
                    <p className="lead">
                      Collaboration is at the heart of my approach as a web
                      developer. I understand that effective communication and
                      teamwork are essential for creating successful websites.
                      By actively involving clients throughout the development
                      process, I ensure that their vision is accurately
                      translated into a functional and aesthetically pleasing
                      website.
                    </p>
                    <p className="lead">
                      In the dynamic world of web development, I find joy in the
                      process of continuous learning and problem-solving. My
                      commitment is to staying current with emerging technologies that
                      allow me to offer innovative solutions tailored to the
                      unique needs of each project. Welcome to the world of web
                      development, where creativity meets functionality, and together,
                      we can bring your digital aspirations to life.
                    </p>
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
