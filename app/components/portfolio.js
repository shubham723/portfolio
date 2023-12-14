"use client";
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

const Portfolio = () => {
  return (
    <section
      id="work"
      className="portfolio-mf sect-pt4 route flex place-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Explore our some of works, where creativity meets
                accomplishment in every project
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 content-center">
          {portfolioData.map((item) => {
            return (
              <div className="work-box" key={item.id}>
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
                    <div className="col-sm-8">
                      <h2 className="w-title">{item.title}</h2>
                      <div className="w-more">
                        <span className="">{item.shortDescription}</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <Link href={`/portfolio/${item.slug}`}>
                          {" "}
                          <CiCirclePlus />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
