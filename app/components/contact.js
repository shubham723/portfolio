"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("/api/contact", data);
      toast.success(
        "Message sent! We'll be in touch shortly."
      );
      reset();
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route flex place-content-center"
      style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
      ref={ref}
    >
      <div className="overlay-mf"></div>
      <div className="container flex justify-center ali">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                  <motion.div className=""
                    variants={variants}
                    initial="initial"
                    whileInView="animate">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Let’s work together</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead text-[16px] text16 mt-3">
                        I'm just a message away! If you have any questions,
                        ideas, or simply want to connect, feel free to reach
                        out. I'm here to assist you. Drop me a line using the
                        form, and I'll get back to you promptly. Let's start a 
                        conversation and explore how I can help
                        you achieve your goals.
                      </p>
                      <ul className="list-ico">
                        {/* <li>
                              <span className="bi bi-geo-alt"></span> 329 WASHINGTON
                              ST BOSTON, MA 02108
                            </li> */}
                        <li className="flex justify-start items-center gap-2">
                          <FaSquarePhone /> +918054296478
                        </li>
                        <li className="flex justify-start items-center gap-2">
                          <IoMdMail /> sshubham7774@gmail.com
                        </li>
                      </ul>
                    </div>
                    {/* <div className="socials">
                          <ul>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-facebook"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-instagram"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-twitter"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="ico-circle">
                                  <i className="bi bi-linkedin"></i>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div> */}
                  </motion.div>

                  <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3, duration: 1 }}
                  >
                    <svg height="450px" className="phone" viewBox="0 0 32.666 32.666">
                      <motion.path
                        strokeWidth={0.2}
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
                      />
                    </svg>
                  </motion.div>

                  <motion.div className=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 4, duration: 1 }}>
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message</h5>
                    </div>
                    <div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Name"
                                {...register("name", {
                                  required: "Name is required",
                                })}
                              />
                              {errors.name && (
                                <span className="error">
                                  {errors.name.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Your Email"
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value:
                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid Email Address",
                                  },
                                })}
                              />
                              {errors.email && (
                                <span className="error">
                                  {errors.email.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Subject"
                                {...register("subject", {
                                  required: "Subject is required",
                                })}
                              />
                              {errors.subject && (
                                <span className="error">
                                  {errors.subject.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                // className="form-control"
                                name="message"
                                id="message"
                                rows="5"
                                placeholder="Message"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("message", {
                                  required: "Message is required",
                                })}
                              ></textarea>
                              {errors.message && (
                                <span className="error">
                                  {errors.message.message}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded border-0 transition sendBtn"
                              disabled={loading}
                            >
                              {loading ? <Spinner animation="grow" /> : 'Send Message'}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
