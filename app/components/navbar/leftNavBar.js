"use client";
import Sidebar from "./Sidebar";

const Navbar = ({ open, setOpen }) => {
    const navList = ["Homepage", "About", "Portfolio", "Contact"];

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
        <Sidebar
            closeNavInMobile={closeNavInMobile}
            navList={navList}
            setOpen={setOpen}
            open={open}
        />
    );
};

export default Navbar;
