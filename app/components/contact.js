"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';

const Contact = () => {
  const [loading, setLoading] = useState(false);
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
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route flex place-content-center"
      style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf"></div>
      <div className="container flex justify-center ali">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                  <div className="">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
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
                  </div>
                  <div className="">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead text-[16px] text16 mt-3">
                        I'm just a message away! If you have any questions,
                        ideas, or simply want to connect, feel free to reach
                        out. I'm here to assist you. Drop me a line using the
                        form, and I'll get back to you promptly. Your feedback
                        is valuable, and I look forward to hearing from you.
                        Let's start a conversation and explore how I can help
                        you achieve your goals.
                      </p>
                      <ul className="list-ico">
                        {/* <li>
                              <span className="bi bi-geo-alt"></span> 329 WASHINGTON
                              ST BOSTON, MA 02108
                            </li> */}
                        <li className="flex justify-start items-center gap-2">
                          <FaSquarePhone /> +91-8054296478
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

export default Contact;
