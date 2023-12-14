"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { BsBinoculars } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    // <section id="services" class="services-mf pt-5 route">
    //   <div class="">
    //     <div className="row">
    //       <div className="col-sm-12">
    //         <div className="title-box text-center">
    //           <h3 className="title-a">Services</h3>
    //           <p className="subtitle-a">
    //             Make your experience with premium suite of services that exceed
    //             your expectations
    //           </p>
    //           <div className="line-mf"></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="row">
    //       <div class="col-md-4">
    //         <div class="service-box">
    //           <div class="service-ico">
    //             <span class="ico-circle">
    //               <i class="bi bi-briefcase"></i>
    //             </span>
    //           </div>
    //           <div class="service-content">
    //             <h2 class="s-title">Web Design</h2>
    //             <p class="s-description text-center">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
    //               adipisci eaque autem fugiat! Quia, provident vitae! Magni
    //               tempora perferendis eum non provident.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-md-4">
    //         <div class="service-box">
    //           <div class="service-ico">
    //             <span class="ico-circle">
    //               <i class="bi bi-card-checklist"></i>
    //             </span>
    //           </div>
    //           <div class="service-content">
    //             <h2 class="s-title">Web Development</h2>
    //             <p class="s-description text-center">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
    //               adipisci eaque autem fugiat! Quia, provident vitae! Magni
    //               tempora perferendis eum non provident.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-md-4">
    //         <div class="service-box">
    //           <div class="service-ico">
    //             <span class="ico-circle">
    //               <i class="bi bi-bar-chart"></i>
    //             </span>
    //           </div>
    //           <div class="service-content">
    //             <h2 class="s-title">Photography</h2>
    //             <p class="s-description text-center">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
    //               adipisci eaque autem fugiat! Quia, provident vitae! Magni
    //               tempora perferendis eum non provident.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-md-4">
    //         <div class="service-box">
    //           <div class="service-ico">
    //             <span class="ico-circle">
    //               <i class="bi bi-binoculars"></i>
    //             </span>
    //           </div>
    //           <div class="service-content">
    //             <h2 class="s-title">Responsive Design</h2>
    //             <p class="s-description text-center">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
    //               adipisci eaque autem fugiat! Quia, provident vitae! Magni
    //               tempora perferendis eum non provident.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-md-4">
    //         <div class="service-box">
    //           <div class="service-ico">
    //             <span class="ico-circle">
    //               <i class="bi bi-brightness-high"></i>
    //             </span>
    //           </div>
    //           <div class="service-content">
    //             <h2 class="s-title">Graphic Design</h2>
    //             <p class="s-description text-center">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
    //               adipisci eaque autem fugiat! Quia, provident vitae! Magni
    //               tempora perferendis eum non provident.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-md-4">
    //         <div class="service-box">
    //           <div class="service-ico">
    //             <span class="ico-circle">
    //               <i class="bi bi-calendar4-week"></i>
    //             </span>
    //           </div>
    //           <div class="service-content">
    //             <h2 class="s-title">Marketing Services</h2>
    //             <p class="s-description text-center">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
    //               adipisci eaque autem fugiat! Quia, provident vitae! Magni
    //               tempora perferendis eum non provident.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      id="services"
      className="services-mf pt-5 route flex place-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">
                Make your experience with premium suite of services
                that exceed your expectations
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 content-center">
          <div className="">
            <div className="service-box md:h-[750px] lg:h-[700px] xl:h-[600px]">
              <div className="service-ico">
                <span className="ico-circle">
                  <FaBriefcase />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                  Before creating your website, I take a moment to understand
                  your business, who you're trying to reach, and the scale of
                  what you do. Based on this, I craft a personalized web design
                  that perfectly matches your current goals and sets you up for
                  future success. Using cutting-edge web design tools, we make
                  sure your site not only looks great but also connects with
                  your audience through modern marketing.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="service-box md:h-[750px] lg:h-[700px] xl:h-[600px]">
              <div className="service-ico">
                <span className="ico-circle">
                  <GoChecklist />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                  I got into website development with one major goal in mind to
                  generate better business opportunities for my clients. With
                  this understanding, I develop a tailored web solution that
                  perfectly fits your current needs and sets the stage for
                  future growth. Using the latest web development technologies,
                  I ensure your site is not just functional but is also equipped
                  with advanced features to support your business and connect
                  with your audience effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="service-box md:h-[750px] lg:h-[700px] xl:h-[600px]">
              <div className="service-ico">
                <span className="ico-circle">
                  <FaDatabase />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Database</h2>
                <p className="s-description text-center">
                  When it comes to your database needs, we delve into the heart
                  of your data requirements. Understanding the nature of your
                  business and its scope, we tailor a database solution that
                  seamlessly integrates with your operations. Leveraging the
                  power of MySQL, we ensure robust relational database
                  management. Additionally, with MongoDB, we embrace a flexible
                  and scalable NoSQL approach, catering to diverse data
                  structures. Our goal is to provide you with a data foundation
                  that aligns perfectly with your business objectives, combining
                  the reliability of MySQL and the versatility of MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
