import Link from "next/link";

const WorkBanner = () => {
  return (
    <div
      className="hero hero-single route bg-image"
      style={{ backgroundImage: "url(/assets/img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h2 className="hero-title mb-4">Portfolio Details</h2>
            <ol className="breadcrumb d-flex justify-content-center">
              <li className="breadcrumb-item">
                <Link href="/">
                    Home
                </Link>
              </li>
              <li className="breadcrumb-item active">Portfolio Details</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
