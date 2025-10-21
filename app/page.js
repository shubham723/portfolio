'use client';

import { motion, useScroll } from 'framer-motion';
import { useState } from 'react';

import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/navbar/leftNavBar';
import Introduction from './components/introduction';
import About from './components/about';
import Portfolio from './components/portfolio';
import Partnership from './components/partnership';
import Contact from './components/contact';

export default function Home() {
  const [open, setOpen] = useState(false);

  // ✅ Track scroll of the whole page
  const { scrollYProgress } = useScroll();

  return (
    <div>
      {/* ✅ Progress bar for full page scroll */}
      <motion.div
        className="progressBar"
        style={{
          scaleX: scrollYProgress,
        }}
      />

      <ToastContainer />
      {!open && <ScrollToTop smooth />}
      <Navbar open={open} setOpen={setOpen} />
      <Introduction />

      <main id="main">
        <About />
        <Portfolio />
        <Partnership />
        <Contact />
      </main>
    </div>
  );
}
