"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppNavBar = () => {
  const [bg, setBg] = useState(false);
  const navList = ["home", "about", "work", "contact"];
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
        <Link href="/" className="textnone">
            <Navbar.Brand className="white">Shubham</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-3">
          {navList.map((id) => (
            <Nav.Link
              key={id}
              onClick={() => scrollToSection(id)}
              style={{
                textDecoration: activeSection === id ? "underline" : "none",
              }}
              className="navUrl"
            >
              {id.toUpperCase()}
            </Nav.Link>
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
