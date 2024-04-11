"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = ({ open, setOpen }) => {
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

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        },
    };

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

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

    const closeNavInMobile = (id) => {
        scrollToSection(id);
        setOpen((prev) => !prev);
    };

    return (
        <div className={`fixed w-full top-0 z-10 h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl ${bg ? "navBackground" : "transparent"}`}>
            {/* LOGO */}
            <div className="lg:flex xl:w-1/3 xl:justify-center">
                <Link
                    href="/"
                    className="no-underline text-sm rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1 text-xl">Shubham</span>
                </Link>
            </div>

            {/* LINKS */}
            <div className="hidden md:flex gap-4">
                {navList.map((id) => (
                    <span
                        key={id}
                        onClick={() => scrollToSection(id)}
                        style={{
                            textDecoration: activeSection === id ? "underline" : "none",
                        }}
                        className="navUrl"
                    >
                        {id.toUpperCase()}
                    </span>
                ))}
            </div>

            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON */}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className={`w-10 h-1 bg-white rounded origin-left`}
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-white rounded"
                    ></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className={`w-10 h-1 bg-white rounded origin-left`}
                    ></motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                    >
                        {navList.map((id) => (
                            <motion.div
                                variants={listItemVariants}
                                className="cursor-pointer hover:underline"
                                key={id}
                                onClick={() => closeNavInMobile(id)}
                            >
                                {id.toUpperCase()}
                            </motion.div>
                        ))}
                        {/* {links.map((link) => (
                            <motion.div
                                variants={listItemVariants}
                                className=""
                                key={link.title}
                            >
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))} */}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
