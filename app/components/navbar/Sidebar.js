import { motion } from "framer-motion";
import Links from "./links/Links";
import "./nav.css";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = ({ closeNavInMobile, navList, setOpen, open }) => {
  return (
    <motion.div className={`sidebar ${open && "sidebar-open"}`} animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links closeNavInMobile={closeNavInMobile} navList={navList} setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
