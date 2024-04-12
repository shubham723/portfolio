import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ closeNavInMobile, navList }) => {
  return (
    <motion.div className="links" variants={variants}>
      {navList?.map((id) => (
        <motion.div
          // variants={listItemVariants}
          className="cursor-pointer"
          key={id}
          variants={itemVariants}
          onClick={() => closeNavInMobile(id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {id}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
