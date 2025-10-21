"use client";
import { portfolioData } from "@/lib/data";
import { useScroll, useSpring, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";


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

const Portfolio = () => {
  const ref = useRef();
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const text = "Featured  Projects";
  const words = text.split(" ");

  return (
    <section
      id="Portfolio"
      className="portfolio-mf  route flex place-content-center"
      ref={ref}
    >
      <div className="container portfolio-wrapper">
        <div className="row sect-pt4 portfolio-row">
          <div className="col-sm-12">
            <div className="title-box text-center">
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
              <span class="title-bg-portfolio portfolio-bg">Portfolio</span>
              <p className="subtitle-a">
                Learn how I combine creativity and technology to build impactful solutions for businesses like yours.
              </p>
              {/* <motion.div style={{ scaleX }} className="progressBar"></motion.div> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 portfolio-card content-center">
          {portfolioData.map((item) => {
            return (
              <div className="work-box" key={item.id}>
                {/* <div> */}
                {/* <a
                  href={item.thumbnail}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                > */}
                <div className="work-img">
                  <img
                    src={item.thumbnail}
                    alt="Portfolio Image"
                    className="img-fluid"
                  />
                </div>
                {/* </a> */}
                <div className="work-content">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="w-title">{item.title}</h2>
                      <div className="w-more">
                        <span className="">{item.shortDescription}</span>
                      </div>

                      <div className="learn-more-container" onClick={() => router.push(`/portfolio/${item?.slug}`)}>
                        <button className="learn-more-btn">
                          <span className="button-text">
                            Learn more
                          </span>
                          <MdArrowOutward className="" />
                        </button>
                      </div>
                    </div>
                    {/* <div className="col-sm-4">
                        <div className="w-like">
                          <Link href={`/portfolio/${item.slug}`}>
                            {" "}
                            <CiCirclePlus />
                          </Link>
                        </div>
                      </div> */}
                  </div>
                </div>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
