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
import Navbar from "./components/nav";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ToastContainer />
      {!open && <ScrollToTop smooth />}
      <Navbar open={open} setOpen={setOpen} />
      {/* <Nav /> */}
      <Introduction />

      <main id="main">
        <About />
        {/* <Services /> */}
        <Portfolio />
        <Contact />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
