'use client'
import ScrollToTop from "react-scroll-to-top";
import Nav from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
// import Footer from "./components/footer";
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <ScrollToTop smooth />
      <Nav />
      <Introduction />

      <main id="main">
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
