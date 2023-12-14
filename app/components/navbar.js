"use client";
import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";

const Nav = () => {
  const [bg, setBg] = useState(false);
  const navList = ["hero", "about", "services", "work", "contact"];
  const [activeSection, setActiveSection] = useState("hero");

  const handleSetActiveSection = (id) => {
    setActiveSection(id);
  };

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleSetActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Observe each section
    navList.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Run once on mount

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar
      className={bg ? "navBackground" : "transparent"}
      fixed="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">Shubham</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-3">
          {navList.map((id) => (
            <Navbar.Brand
              key={id}
              onClick={() => scrollToSection(id)}
              style={{
                textDecoration: activeSection === id ? "underline" : "none",
              }}
              className="navUrl"
            >
              {id.toUpperCase()}
            </Navbar.Brand>
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;