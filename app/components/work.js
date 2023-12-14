const Work = ({ data }) => {
  return (
    <main id="main">
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
          <div className="col-lg-5">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {data.category}
                  </li>
                  <li>
                    <strong>Tech Stack</strong>: {data.techStack}
                  </li>
                  <li>
                    <strong>Project URL</strong>: <a href={data.url} target="blank">{data.url}</a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-details-slider swiper">
                <img src={data.images} alt="Portfolio Image" className="md:mb-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;
