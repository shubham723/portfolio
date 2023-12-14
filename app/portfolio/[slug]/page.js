"use client";
import { useEffect, useState } from "react";
// import Footer from "../../components/footer";
import Work from "../../components/work";
import { portfolioData } from "@/lib/data";
import Spinner from "react-bootstrap/Spinner";
import WorkBanner from "../../components/workBanner";

const Portfolio = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    portfolioHandler();
  }, []);

  const portfolioHandler = () => {
    const slug = params?.slug;
    const portfolio = [...portfolioData];
    const selectedPortfolio = portfolio.find(
      (item) => item.slug?.trim()?.toLowerCase() === slug
    );
    setData(selectedPortfolio);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="spinner">
            <Spinner animation="border" />
        </div>
      ) : (
        <>
          <WorkBanner />
          <Work data={data} />
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default Portfolio;
