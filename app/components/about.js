"use client"
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
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
                        <Image
                          src="/assets/img/testimonial-2.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt=""
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
                    <span>HTML</span> 
                    {/* <span className="pull-right"></span> */}
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>CSS3</span> 
                    {/* <span className="pull-right">90%</span> */}
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>JAVASCRIPT</span>{" "}
                    {/* <span className="pull-right">90%</span> */}
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
                    <span>REACT</span> 
                    {/* <span className="pull-right">95%</span> */}
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
                    <span>NODE</span> 
                    {/* <span className="pull-right">95%</span> */}
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

                    <span>NEXT</span> 
                    {/* <span className="pull-right">95%</span> */}
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

                    <span>AWS</span> 
                    {/* <span className="pull-right">85%</span> */}
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>GIT</span> 
                    {/* <span className="pull-right">90%</span> */}
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
                        style={{ width: "80%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 ml-5">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                      My passion for technology has been a driving
                      force throughout my journey in web development. My journey
                      in web development has been characterized by a constant
                      pursuit of knowledge, keeping me at the forefront of
                      industry trends and technologies.
                    </p>
                    <p className="lead">
                      Collaboration is at the core of my approach, as I believe
                      that effective communication and teamwork are essential
                      for bringing any digital project to completion. Whether it's
                      building responsive and user-friendly interfaces or
                      optimizing websites for performance, I am committed to
                      delivering solutions that not only meet but exceed the
                      expectations of clients and end-users alike
                    </p>
                    <p className="lead">
                      In the dynamic world of web development, I find joy in the
                      process of continuous learning and problem-solving. My
                      commitment to staying current with emerging technologies
                      allows me to offer innovative solutions tailored to the
                      unique needs of each project. Welcome to the realm of web
                      development, where creativity meets functionality, and
                      together, we can bring your digital aspirations to life.
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
