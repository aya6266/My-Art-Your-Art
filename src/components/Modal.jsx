import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import "./modal.css";
import { motion } from "framer-motion/dist/framer-motion";

const Modal = () => {
  const { selectedImg, handleBackDrop } = useContext(AppContext);
  return (
    <motion.div
      className="backdrop"
      onClick={(e) => handleBackDrop(e)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        src={selectedImg}
        alt="Larger element"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

export default Modal;
