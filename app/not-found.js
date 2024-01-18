import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-12">
              <div className="text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Uh oh! Looks like you got lost.</h3>

                  <p>
                    You’re either misspelling the URL or requesting a page
                    that's no longer here
                  </p>

                  <Link href="/" className="link_404">
                    Hitch a ride back home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
