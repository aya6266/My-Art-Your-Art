import React, { useContext } from "react";
import { AppContext } from "../App";
import { motion } from "framer-motion/dist/framer-motion";

import "./progressBar.css";
const ProgressBar = () => {
  const { progress } = useContext(AppContext);
  return (
    <motion.div
      className="progress__bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
